import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect';

export const useAboutSectionAnimation = ({
  aboutSectionRef,
  toolsRef,
  aboutTextWrapRef,
  titleRef,
}: {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  aboutTextWrapRef: React.RefObject<HTMLDivElement>;
  toolsRef: React.RefObject<HTMLUListElement>;
  titleRef: React.RefObject<HTMLHeadingElement>;
}) => {
  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSectionRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        const ABOUT_TL = gsap.timeline({
          defaults: {
            stagger: 0.2,
            opacity: 0,
            autoAlpha: 0,
            y: 10,
          },
        });

        ABOUT_TL.fromTo(
          [titleRef.current, aboutTextWrapRef.current?.querySelectorAll('p')],
          { y: 25 },
          { y: 0, autoAlpha: 1, duration: 1, stagger: 0.25 },
        );

        ABOUT_TL.fromTo(
          [toolsRef.current?.querySelectorAll('li')],
          { y: 25 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            autoAlpha: 1,
            ease: 'power3.out',
            stagger: 0.02,
          },
          '-=0.6',
        );
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [titleRef]);
};
