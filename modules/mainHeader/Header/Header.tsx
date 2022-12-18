import { useRef } from 'react';
import cn from 'classnames';

import { useWindowScroll, useScrollDirection } from 'hooks';
import { Navbar } from 'modules/mainHeader/Navbar';
import { AppLink } from 'components/AppLink';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const { y: scrollPostionY } = useWindowScroll();

  const scrollDirection = useScrollDirection();

  const headerThreshold = scrollPostionY > 60;

  return (
    <header
      ref={headerRef}
      className={cn('main-header', {
        'main-header__fixed': headerThreshold && scrollDirection === 'up',
        'main-header__hidden': headerThreshold && scrollDirection === 'down',
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
