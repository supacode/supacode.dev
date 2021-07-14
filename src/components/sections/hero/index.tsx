import React from 'react';

import { socials } from '../../../constants/socialLinks';
import { AppLink } from '../../AppLink';
import { chevronRight } from '../../../assets/icons/icons';
import './hero.scss';

export interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h2 className="hero__lead-text">
          My name is <span>Maverick</span>.
        </h2>
        <h3 className="hero__tag-text">I code for fun, and as a job.</h3>

        <p className="hero__desc-text">
          👋🏽 &nbsp; Hey there! I'm Maverick, a web developer based in Abuja,
          Nigeria. <br />
          Welcome to my little corner of the web, where I'll be sharing notes,
          code snippets, and resources on topics that interest me and updates on
          projects I'm working on.
        </p>

        <AppLink
          icon={chevronRight}
          text={'Contact Me'}
          href="mailto:supacode@gmail.com"
        />
      </div>
      <ul className="hero__social">
        {socials.map((social) => (
          <li key={social.url} className="hero__social--list">
            <AppLink
              href={social.url}
              title={social.name}
              target="_blank"
              clearStyles
            >
              <span className="hero__social--link">{social.icon}</span>
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
