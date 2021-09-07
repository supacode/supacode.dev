import React from 'react';

import { socials } from '../../../constants/socialLinks';
import { AppLink } from '../../AppLink';
import { chevronRight } from '../../../assets/icons';
import './hero.scss';

export interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="hero" id="content">
      <div className="hero__left">
        <h2 className="hero__lead-text">
          My name is <span>Maverick</span>.
        </h2>
        <h3 className="hero__tag-text">I code for fun, and as a job.</h3>

        <p className="hero__desc-text">
          👋🏽 &nbsp; Hey there! I&apos;m Maverick, a web developer based in
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
      <ul className="hero__social">
        {socials.map((social) => (
          <li key={social.url} className="hero__social--list">
            <a
              href={social.url}
              title={social.name}
              rel="noreferrer"
              target="_blank"
              className="hero__social--link"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
