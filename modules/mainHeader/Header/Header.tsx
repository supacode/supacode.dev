import { useRef } from 'react';
import cn from 'classnames';

import { Navbar } from 'modules/mainHeader/Navbar';
import { AppLink } from 'components/ui/AppLink';
import { useScrollDirection } from 'hooks/useScrollDirection';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const scrollDirection = useScrollDirection();

  return (
    <header
      ref={headerRef}
      className={cn('main-header', {
        'main-header__fixed': scrollDirection === 'up',
        'main-header__hidden': scrollDirection === 'down',
      })}
    >
      <div className="main-header__inner">
        <h1 className="main-header__logo">
          <AppLink
            to="/"
            onClick={() => {
              document.querySelector('main')?.scrollTo(0, 0);
            }}
          >
            Supacode
          </AppLink>
        </h1>

        <Navbar />
      </div>
    </header>
  );
};
