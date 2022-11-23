import { useRef } from 'react';
import cn from 'classnames';

import { Navbar } from 'modules/mainHeader/Navbar';
import { AppLink } from 'components/ui/AppLink';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header ref={headerRef} className={cn('main-header')}>
      <div className={'main-header__inner'}>
        <h1 className={'main-header__logo'}>
          <AppLink to="/">Supacode</AppLink>
        </h1>

        <Navbar />
      </div>
    </header>
  );
};
