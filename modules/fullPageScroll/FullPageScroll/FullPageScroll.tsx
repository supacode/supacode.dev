import { Children, useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import { useWindowSize } from 'hooks';
import { ScrollIndicator } from '../ScrollIndicator';

type FullPageContainerProps = {
  children: React.ReactNode;
};

export const FullPageContainer: React.FC<FullPageContainerProps> = ({
  children,
}) => {
  const panelsCount = Children.count(children);

  const { height } = useWindowSize();

  const windowHeight = useRef<number>(height);

  useEffect(() => {
    windowHeight.current = height;
  }, [height]);

  const [viewState, setViewState] = useState({
    currentPanel: 1,
    transitioning: false,
    currentTop: 0,
  });

  const prevSection = () => {
    setViewState((prevState) => {
      if (prevState.transitioning) return prevState;

      if (prevState.currentPanel <= 1) {
        return {
          ...prevState,
          currentTop: 0,
        };
      }

      setTimeout(
        () => setViewState((prev) => ({ ...prev, transitioning: false })),
        1000,
      );

      return {
        ...prevState,
        transitioning: true,
        currentPanel: prevState.currentPanel - 1,
        currentTop: -windowHeight.current * (prevState.currentPanel - 2),
      };
    });
  };

  const nextSection = () =>
    setViewState((prevState) => {
      if (prevState.transitioning) return prevState;

      if (prevState.currentPanel >= panelsCount) {
        return {
          ...prevState,
          currentTop: -windowHeight.current * (panelsCount - 1),
        };
      }

      setTimeout(
        () => setViewState((prev) => ({ ...prev, transitioning: false })),
        1000,
      );

      return {
        transitioning: true,
        currentPanel: prevState.currentPanel + 1,
        currentTop: -windowHeight.current * prevState.currentPanel,
      };
    });

  const restoreSection = () => {
    setViewState((prev) => {
      return {
        ...prev,
        currentTop: -windowHeight.current * (prev.currentPanel - 1),
      };
    });
  };

  const handleScroll = (evt: WheelEvent) => {
    const isScrollingDown =
      evt.deltaY > 40 && viewState.currentPanel < panelsCount;

    const isScrollingUp = evt.deltaY < -40 && viewState.currentPanel > 0;

    if (isScrollingDown) nextSection();
    if (isScrollingUp) prevSection();
  };

  const onSetSection = (sectionNumber: number) =>
    setViewState((prevState) => {
      setTimeout(
        () => setViewState((prev) => ({ ...prev, transitioning: false })),
        1000,
      );

      return {
        ...prevState,
        transitioning: true,
        currentPanel: sectionNumber,
        currentTop: -windowHeight.current * (sectionNumber - 1),
      };
    });

  const removeEventListeners = () => {
    window.removeEventListener('wheel', (evt) => handleScroll(evt));

    window.removeEventListener('touchstart', (evt) =>
      handleSwipe({
        screenY: evt.touches[0].screenY,
        isStart: true,
      }),
    );

    window.removeEventListener('touchend', (evt) =>
      handleSwipe({
        screenY: evt.changedTouches[0].screenY,
        isStart: false,
      }),
    );

    window.removeEventListener('pointerdown', (evt) =>
      handleSwipe({
        screenY: evt.screenY,
        isStart: true,
      }),
    );

    window.removeEventListener('pointerup', (evt) =>
      handleSwipe({
        screenY: evt.screenY,
        isStart: false,
      }),
    );

    window.removeEventListener('pointermove', (e) => {
      handleDrag(e.screenY);
    });
  };

  useEffect(() => {
    removeEventListeners();

    window.addEventListener('wheel', (e) => {
      handleScroll(e);
    });

    window.addEventListener('touchstart', (evt) =>
      handleSwipe({
        screenY: evt.changedTouches[0].screenY,
        isStart: true,
      }),
    );

    window.addEventListener('touchend', (evt) =>
      handleSwipe({
        screenY: evt.changedTouches[0].screenY,
        isStart: false,
      }),
    );

    window.addEventListener('pointerdown', (evt) =>
      handleSwipe({
        screenY: evt.screenY,
        isStart: true,
      }),
    );

    window.addEventListener('pointerup', (evt) =>
      handleSwipe({
        screenY: evt.screenY,
        isStart: false,
      }),
    );

    window.addEventListener('pointermove', (evt) => handleDrag(evt.screenY));

    window.addEventListener('touchmove', (evt) =>
      handleDrag(evt.changedTouches[0].screenY),
    );

    return () => {
      removeEventListeners();
    };
  }, []);

  const touchStartY = useRef(0);

  const [currentPointer, setCurrentPointer] = useState(0);

  const handleDrag = (screenY: number) => {
    if (touchStartY.current === 0) return;

    let initialSet = false;
    let difference = 0;

    setCurrentPointer((prev) => {
      if (prev === 0) {
        initialSet = true;
        return screenY;
      }

      difference = prev - screenY;

      if (
        (difference < 0 && difference > -2) ||
        (difference > 0 && difference < 2)
      ) {
        initialSet = true;
        return prev;
      }

      return screenY;
    });

    if (initialSet) return;

    setViewState((prev) => {
      if (prev.transitioning) return prev;

      const currentTop = prev.currentTop - difference;

      return { ...prev, currentTop };
    });
  };

  const handleSwipe = ({
    screenY,
    isStart,
  }: {
    isStart: boolean;
    screenY: number;
  }) => {
    if (isStart) {
      touchStartY.current = screenY;
      return;
    }

    const touchDifference = touchStartY.current - screenY;

    const isScrollingUp = touchDifference < -100;

    const isScrollingDown = touchDifference > 100;

    if (isScrollingUp) prevSection();
    if (isScrollingDown) nextSection();

    touchStartY.current = 0;
    restoreSection();
    setCurrentPointer(0);
  };

  return (
    <div className={cn('fp-scroll')}>
      {currentPointer !== 0 && <div className={'fp-scroll__click-mask'} />}

      <div
        className={cn('fp-scroll__section', {
          'fp-scroll__section--transitioning': viewState.transitioning,
        })}
        style={{ top: `${viewState.currentTop}px` }}
      >
        {children}

        <ScrollIndicator
          count={panelsCount}
          activeIndex={viewState.currentPanel}
          setIndicator={onSetSection}
        />
      </div>
    </div>
  );
};
