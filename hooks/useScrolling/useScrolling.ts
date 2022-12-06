import { RefObject, useEffect, useState } from 'react';
import { addEvent, removeEvent } from 'utils';

export const useScrolling = (ref: RefObject<HTMLElement>): boolean => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      let scrollingTimeout: NodeJS.Timeout;

      const handleScrollEnd = () => {
        setScrolling(false);
      };

      const handleScroll = () => {
        setScrolling(true);
        clearTimeout(scrollingTimeout);
        scrollingTimeout = setTimeout(() => handleScrollEnd(), 200);
      };

      addEvent(ref.current, 'scroll', handleScroll, false);

      return () => {
        if (ref.current) {
          removeEvent(ref.current, 'scroll', handleScroll, false);
        }
      };
    }

    return () => {};
  }, [ref]);

  return scrolling;
};

export default useScrolling;
