import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect';

export const useHeroAnimations = () => {
  useIsomorphicLayoutEffect(() => {
    const HERO_TL = gsap.timeline({
      defaults: {
        delay: 0.3,
        stagger: 0.2,
        y: 25,
      },
    });

    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        HERO_TL.fromTo(
          [
            '.hero__lead-text',
            '.hero__tag-text',
            '.hero__desc-text',
            '.hero__btn',
          ],
          { y: 25, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            height: 'auto',
            duration: 1.5,
            ease: 'power3.out',
          },
          '-=0.4',
        );

        HERO_TL.fromTo(
          '.social-links__list',
          { y: 25, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            height: 'auto',
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.1,
          },
          '-=2',
        );
      },
    });

    return () => {
      HERO_TL.kill();
    };
  }, []);

  return null;
};
