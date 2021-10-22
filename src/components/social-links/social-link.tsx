import React from 'react';
import cn from 'classnames';

import { socials } from '../../constants/socialLinks';

import './social-link.scss';

type SocialLinksProps = {
  direction: 'stacked' | 'inline';
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ direction }) => {
  return (
    <ul
      className={cn('social-links', {
        'social-links__stacked': direction === 'stacked',
        'social-links__inline': direction === 'inline',
      })}
    >
      {socials.map((social) => (
        <li key={social.url} className="social-links--list">
          <a
            href={social.url}
            title={social.name}
            rel="noreferrer"
            target="_blank"
            className="social-links--link"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
