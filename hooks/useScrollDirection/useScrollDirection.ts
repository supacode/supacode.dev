import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export const useScrollDirection = (): ScrollDirection => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const listener = () => {
      const scrollY = window.pageYOffset;

      if (scrollY > lastScrollY && scrollDir !== 'down') setScrollDir('down');
      if (scrollY < lastScrollY && scrollDir !== 'up') setScrollDir('up');

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, []);

  return scrollDir;
};
