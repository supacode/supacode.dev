import cn from 'classnames';

import { socials } from 'constants/socialLinks';

type SocialLinksProps = {
  direction: 'row' | 'column';
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ direction }) => {
  return (
    <ul
      className={cn('social-links', {
        'social-links__row': direction === 'row',
        'social-links__column': direction === 'column',
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
