import { useEffect, useRef, Children, useState } from 'react';
import { SnapScrollIndicator } from '../SnapScrollIndicator';
import { SnapScrollSection } from '../SnapScrollSection';

type SnapScrollContainerProps = {
  children: React.ReactNode;
};

export const SnapScrollContainer: React.FC<SnapScrollContainerProps> = ({
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const { current: sections } = useRef<HTMLDivElement[]>([]);
  const count = Children.count(children);

  let prevTime = new Date().getTime();

  const handleNext = () => {
    if (currentSlide === sections.length) return;

    const prevSection = sections[currentSlide - 1];
    const nextSection = sections[currentSlide];

    nextSection.style.transform = 'translate3d(0, 0, 0)';
    prevSection.style.transform = 'translate3d(0, -100%, 0)';

    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentSlide <= 1) return;

    const prevSection = sections[currentSlide - 1];
    const beforePrevSection = sections[currentSlide - 2];

    prevSection.style.transform = 'translate3d(0, 100%, 0)';
    beforePrevSection.style.transform = 'translate3d(0, 0, 0)';

    setCurrentSlide((prev) => prev - 1);
  };

  const slideTo = (index: number) => {
    if (currentSlide !== index) return;

    // if (index > currentSlide) {
    //   for (let i = currentSlide + 1; i < index; i++) handleNext();

    //   handleNext();
    // } else if (index < currentSlide) {
    //   for (let i = currentSlide - 1; i > index; i--) handlePrev();

    //   handlePrev();
    // }
    if (index > currentSlide) {
      const prevSection = sections[currentSlide - 1];
      const nextSection = sections[index - 1];

      nextSection.style.transform = 'translate3d(0, 0, 0)';
      prevSection.style.transform = 'translate3d(0, -100%, 0)';
    } else if (index < currentSlide) {
      const prevSection = sections[currentSlide - 1];
      const nextSection = sections[index - 1];

      nextSection.style.transform = 'translate3d(0, 0, 0)';
      prevSection.style.transform = 'translate3d(0, 100%, 0)';
    }
  };

  const onWheelHandler = (evt: WheelEvent) => {
    if (sections.length === 0) return;

    const curTime = new Date().getTime();
    const timeDiff = curTime - prevTime;

    prevTime = curTime;

    // Prevents scrolling too fast
    if (timeDiff <= 200) return;

    // Is scrolling down
    if (evt.pageY < 0 || -evt.deltaY < 0 || evt.detail > 0) {
      handleNext();

      // Is scrolling up
    } else if (evt.pageY > 0 || -evt.deltaY > 0 || evt.detail < 0) {
      handlePrev();
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', onWheelHandler);

    return () => document.removeEventListener('wheel', onWheelHandler);
  }, [currentSlide]);

  return (
    <div className="snap-scroll-container">
      {Children.map(children, (child, index) => (
        <SnapScrollSection
          key={index}
          ref={(el) => el && (sections[index] = el)}
          style={{
            // transform: `translate3d(0, ${index === 0 ? 0 : '100%'}, 0)`,
            transform: `translate3d(0, ${
              // eslint-disable-next-line no-nested-ternary
              index < currentSlide - 1
                ? '-100%'
                : index > currentSlide - 1
                ? '100%'
                : '0'
            }, 0)`,
          }}
        >
          {child}
        </SnapScrollSection>
      ))}

      <SnapScrollIndicator
        count={count}
        activeIndex={currentSlide}
        setCurrenSlide={setCurrentSlide}
        slideTo={slideTo}
      />
    </div>
  );
};
