import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { SocialLinks } from 'components/SocialLinks';

export const HeroSection: React.FC = () => {
  let heroLeadTextRef = useRef(null) as any;
  let heroTagTextRef = useRef(null) as any;
  let heroDescriptionTextRef = useRef(null) as any;
  const HERO_TL = gsap.timeline({
    defaults: {},
  });

  useEffect(() => {}, [heroLeadTextRef]);

  useEffect(() => {}, []);
  return (
    <section className="hero" id="content">
      <div className="hero__left">
        <h2 className="hero__lead-text" ref={(el) => (heroLeadTextRef = el)}>
          My name is{' '}
          <span className="hero__lead-text--highlight">Maverick</span>.
        </h2>

        <h3 className="hero__tag-text" ref={(el) => (heroTagTextRef = el)}>
          I code for fun, and as a job.
        </h3>

        <p
          className="hero__desc-text"
          ref={(el) => (heroDescriptionTextRef = el)}
        >
          <span aria-label="emoji wave" role="img">
            👋🏽
          </span>{' '}
          Hey there! I&apos;m Maverick, a Software Developer with a primary
          focus on Frontend Engineering. <br />
          Welcome to my little corner of the web, where I share notes, code
          snippets, and resources on topics that interest me.
        </p>

        <div className="hero__btn">
          {/* <AppLink
            icon={chevronRight}
            text="Contact Me"
            title="Send me an email"
            href="mailto:supacode@gmail.com"
          /> */}
        </div>
      </div>

      <SocialLinks direction="row" />
    </section>
  );
};
