import React from 'react';

import { AppLink } from '../../AppLink';
import { chevronRight } from '../../../assets/icons';
import { SocialLinks } from '../../social-links';
import './hero.scss';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="content">
      <div className="hero__left">
        <h2 className="hero__lead-text">
          My name is <span>Maverick</span>.
        </h2>
        <h3 className="hero__tag-text">I code for fun, and as a job.</h3>

        <p className="hero__desc-text">
          👋🏽 &nbsp; Hey there! I&apos;m Maverick, a Software Developer based in
          Abuja, Nigeria. <br />
          Welcome to my little corner of the web, where I&apos;ll be sharing
          notes, code snippets, and resources on topics that interest me and
          updates on projects I&apos;m working on.
        </p>

        <AppLink
          icon={chevronRight}
          text="Contact Me"
          title="Send me an email"
          href="mailto:supacode@gmail.com"
        />
      </div>

      <SocialLinks direction="stacked" />
    </section>
  );
};
