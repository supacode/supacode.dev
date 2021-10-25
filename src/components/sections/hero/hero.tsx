import React from 'react';

import { AppLink } from '../../AppLink';
import { chevronRight } from '../../../assets/icons';
import { SocialLinks } from '../../social-links';
import { useWindowSize } from '../../../hooks';
import { viewports } from '../../../constants/config';
import { useScrollReveal } from '../../../hooks';

import './hero.scss';

export const Hero: React.FC = () => {
  const { width } = useWindowSize();

  const isDesktop = width > viewports.screenXlMin;

  const heroElementSelectors = [
    { el: '.hero__left', delay: 200 },
    { el: '.hero__tag-text', delay: 300 },
    { el: '.hero__desc-text', delay: 500 },
    { el: '.hero__btn', delay: 700 },
  ];

  heroElementSelectors.map((item) => {
    useScrollReveal({ selector: item.el, options: { delay: item.delay } });
  });

  return (
    <section className="hero" id="content">
      <div className="hero__left">
        <h2 className="hero__lead-text">
          My name is <span>Maverick</span>.
        </h2>
        <h3 className="hero__tag-text">I code for fun, and as a job.</h3>

        <p className="hero__desc-text">
          <span aria-label="emoji wave">👋🏽</span> &nbsp; Hey there! I&apos;m
          Maverick, a Software Developer with a primary focus on Frontend
          Engineering. <br />
          Welcome to my little corner of the web, where I share notes, code
          snippets, and resources on topics that interest me.
        </p>

        <div className="hero__btn">
          <AppLink
            icon={chevronRight}
            text="Contact Me"
            title="Send me an email"
            href="mailto:supacode@gmail.com"
          />
        </div>
      </div>

      <SocialLinks direction={isDesktop ? 'stacked' : 'inline'} />
    </section>
  );
};
