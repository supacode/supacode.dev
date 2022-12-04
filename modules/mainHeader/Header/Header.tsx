import { useRef } from 'react';
import { useWindowScroll } from 'react-use';
import cn from 'classnames';

import { Navbar } from 'modules/mainHeader/Navbar';
import { AppLink } from 'components/ui/AppLink';
import { useScrollDirection } from 'hooks';
import { useBreakpoint } from 'utils/breakpoint';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const breakpoints = useBreakpoint();

  const isMobile = breakpoints === 'xs' || breakpoints === 'sm';

  const { y: scrollPostionY } = useWindowScroll();

  const scrollDirection = useScrollDirection();

  const headerThreshold = scrollPostionY > 60;

  return (
    <header
      ref={headerRef}
      className={cn(
        'main-header',

        // Doing this only on desktop because of a weird
        // Safari bug that occurs on pull to refresh.
        !isMobile && {
          'main-header__fixed': headerThreshold && scrollDirection === 'up',
          'main-header__hidden': headerThreshold && scrollDirection === 'down',
        },
      )}
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
