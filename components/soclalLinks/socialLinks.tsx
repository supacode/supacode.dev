import cn from 'classnames';

import { socials } from '../../constants/socialLinks';

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
        <li key={social.url} className="social-links__list">
          <a
            href={social.url}
            title={social.name}
            className="social-links__link"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
