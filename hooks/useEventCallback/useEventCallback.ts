import { useCallback, useRef } from 'react';

import { useIsomorphicLayoutEffect } from 'hooks';

export const useEventCallback = <Args extends unknown[], R>(
  // eslint-disable-next-line no-unused-vars
  fn: (...args: Args) => R,
) => {
  const ref = useRef<typeof fn>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback((...args: Args) => ref.current(...args), [ref]);
};
