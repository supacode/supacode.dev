import { ReactNode, HTMLAttributeAnchorTarget } from 'react';
import cn from 'classnames';

import Link from 'next/link';

type AppLinkProps = {
  asButton?: boolean;
  newTab?: boolean;
  children?: ReactNode;
  className?: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
  text?: string;
  title?: string;
  to: string;
  onClick?: () => void;
};

export const AppLink: React.FC<AppLinkProps> = ({
  asButton = false,
  children,
  className,
  rel,
  target,
  to,
  newTab,
  text,
  title,
  onClick,
}) => {
  if (newTab) {
    rel = 'noopener noreferrer';
    target = '_blank';
  }

  return (
    <Link
      href={to}
      className={cn([className], 'app-link', {
        'app-link__btn': asButton,
      })}
      rel={rel}
      target={target}
      title={title}
      onClick={onClick}
    >
      {children && children}
      {text && text}
    </Link>
  );
};

AppLink.displayName = 'components/AppLink';
