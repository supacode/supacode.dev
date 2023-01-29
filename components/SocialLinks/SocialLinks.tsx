import cn from 'classnames';

import { AppLink } from 'components/AppLink';
import { socialLinks } from 'consts';

type SocialLinksProps = {
  direction?: 'row' | 'column';
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  direction = 'row',
}) => (
  <ul
    className={cn('social-links', {
      'social-links__row': direction === 'row',
      'social-links__column': direction === 'column',
    })}
  >
    {socialLinks.map((social) => (
      <li key={social.url} className="social-links__list">
        <AppLink
          to={social.url}
          title={social.name}
          className="social-links__link"
          newTab
        >
          {social.icon}
        </AppLink>
      </li>
    ))}
  </ul>
);
