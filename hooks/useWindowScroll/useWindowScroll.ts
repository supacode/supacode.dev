import { useEffect } from 'react';

import { isBrowser, addEvent, removeEvent } from 'utils';
import { useRafState } from 'hooks';

export interface State {
  x: number;
  y: number;
}

export const useWindowScroll = (): State => {
  const [state, setState] = useRafState<State>(() => ({
    x: isBrowser ? window.pageXOffset : 0,
    y: isBrowser ? window.pageYOffset : 0,
  }));

  useEffect(() => {
    const handler = () => {
      setState((prevState) => {
        const { pageXOffset, pageYOffset } = window;
        // Check state for change, return same state if no change happened to prevent rerender
        // (see useState/setState documentation). useState/setState is used internally in useRafState/setState.
        return prevState.x !== pageXOffset || prevState.y !== pageYOffset
          ? {
              x: pageXOffset,
              y: pageYOffset,
            }
          : prevState;
      });
    };

    // We have to update window scroll at mount, before subscription.
    // Window scroll may be changed between render and effect handler.
    handler();

    addEvent(window, 'scroll', handler, {
      capture: false,
      passive: true,
    });

    return () => {
      removeEvent(window, 'scroll', handler);
    };
  }, []);

  return state;
};
