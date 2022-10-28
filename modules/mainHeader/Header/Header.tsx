import Link from 'next/link';

import { Navbar } from '../Navbar';

export const Header: React.FC = () => {
  return (
    <header className={'main-header'}>
      <div className={'main-header__inner'}>
        <h1 className={'main-header__logo'}>
          <Link href="/">Supacode</Link>
        </h1>

        <Navbar />
      </div>
    </header>
  );
};
