import cn from 'classnames';

import { Navbar } from 'modules/mainHeader/Navbar';
import { AppLink } from 'components/ui/AppLink';

export const Header: React.FC = () => (
  <header className={cn('main-header')}>
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
