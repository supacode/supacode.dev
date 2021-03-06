import { useEffect } from 'react';
import {
  scrollRevealOptions,
  ScrollRevealOptions,
} from './scrollRevealOptions';
import scrollReveal from '../../utils/scrollreveal';
import { usePrefersReducedMotion } from '..';

type useScrollRevealProps = {
  selector: string;
  options?: ScrollRevealOptions;
};

export const useScrollReveal = ({
  selector,
  options,
}: useScrollRevealProps): void => {
  const configOptions = scrollRevealOptions({
    delay: options?.delay,
    interval: options?.interval,
    origin: options?.origin,
  });

  const useReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (useReducedMotion) {
      return;
    }

    scrollReveal && scrollReveal.reveal(selector, configOptions);
  }, []);
};
