import cn from 'classnames';

import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

type AppLinkProps = {
  asButton?: boolean;
  openInNewTab?: boolean;
  children?: React.ReactNode;
  className?: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
  text?: string;
  title?: string;
  to: string;
};

export const AppLink: React.FC<AppLinkProps> = ({
  asButton = false,
  children,
  className,
  rel,
  target,
  to,
  text,
  title,
}) => {
  return (
    <Link
      href={to}
      className={cn([className], 'app-link', {
        'app-link__btn': asButton,
      })}
      rel={rel}
      target={target}
      title={title}
    >
      {children && children}
      {text && <span>{text}</span>}
    </Link>
  );
};
