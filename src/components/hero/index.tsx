import React from 'react';

import './hero.scss';

export interface HeroProps {}

export const Hero: React.SFC<HeroProps> = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <p className="hero__lead">
          My name is <span>Maverick.</span>
        </p>
        <p className="hero__lead-2">I code for fun, and as a job.</p>
        <p className="hero__description">
          👋🏽 Hey there! I&apos;m Maverick, a web developer based in Abuja,
          Nigeria.
          <br /> Welcome to my little corner of the web, where I&apos;ll be
          sharing notes, code snippets, and resources on topics that interest me
          and updates on projects I&apos;m working on.
        </p>
        <a href="mailto:supacode@gmail.com" className="btn hero__btn">
          Contact Me
        </a>
      </div>
    </div>
  );
};
