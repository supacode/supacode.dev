import React from 'react';
import cn from 'classnames';

import { socials } from '../../constants/socialLinks';
import { useScrollReveal } from '../../hooks';
import './social-link.scss';

type SocialLinksProps = {
  direction: 'stacked' | 'inline';
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ direction }) => {
  useScrollReveal({
    selector: '.social-links--list',
    options: {
      delay: 700,
      interval: 50,
    },
  });

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
            className="social-links--link"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
