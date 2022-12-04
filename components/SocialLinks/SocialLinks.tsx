import cn from 'classnames';

import { AppLink } from 'components/ui/AppLink';
import { socials } from 'constants/socialLinks';

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
    {socials.map((social) => (
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
