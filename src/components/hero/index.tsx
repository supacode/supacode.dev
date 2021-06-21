import React from 'react';

import './hero.scss';

export interface HeroProps {}

export const Hero: React.SFC<HeroProps> = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <p className="hero__text-small">Welcome to my website.</p>
        <p className="hero__lead">
          <span>My name is</span> Maverick
        </p>
        <p className="hero__lead-2">
          I'm a Web Developer based in Abuja, Nigeria.
        </p>
      </div>
    </div>
  );
};
