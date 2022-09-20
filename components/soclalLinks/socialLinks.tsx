import React from 'react';
import cn from 'classnames';

import { socials } from '../../constants/socialLinks';
import styles from './socialLinks.module.scss';

type SocialLinksProps = {
  direction: 'stacked' | 'inline';
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ direction }) => {
  return (
    <ul
      className={cn(styles['social-links'], {
        [styles['social-links__stacked']]: direction === 'stacked',
        [styles['social-links__inline']]: direction === 'inline',
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
