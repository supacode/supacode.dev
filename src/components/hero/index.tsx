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
          I'm a Web Developer based in Abuja, Nigeria. Quis, voluptate eum fuga
          culpa aperiam praesentium quam eaque exercitationem amet ratione
          officiis dicta suscipit earum quaerat sint nisi quo voluptas soluta
          veritatis asperiores nulla? Culpa aperiam quod maiores! Velit,
          corrupti beatae!
        </p>
        <a href="mailto:supacode@gmail.com" className="btn hero__btn">
          Contact Me
        </a>
      </div>
    </div>
  );
};
