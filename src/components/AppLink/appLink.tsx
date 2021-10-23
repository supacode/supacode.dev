import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';

import './appLink.scss';

// TODO whitelist/blacklist props for links and buttons
// TODO validate rest parameter

type LinkProps = {
  text?: string;
  href?: string;
  icon?: JSX.Element;
  className?: string;
  title?: string;
  target?: string;
  external?: boolean;
  clearStyles?: boolean;
  onClick?: (evt: React.SyntheticEvent<EventTarget>) => void;
};

export const AppLink: React.FC<LinkProps> = ({
  text,
  icon,
  href,
  className,
  onClick,
  clearStyles = false,
  children,
  ...rest
}) => {
  // Return the JSX if no children are passed down,
  // helpful for rendering passing down e.g icons/images as links
  if (!children)
    children = (
      <>
        <span className="btn__text">{text}</span>
        {icon && <span>{icon} </span>}
      </>
    );

  const btnProps = {
    ...rest,
    className: cn({ btn: !clearStyles }, className),
  };

  const internal = href && /^\/(?!\/)/.test(href);

  if (href) {
    if (internal) {
      // internal app link
      return (
        <Link {...btnProps} to={href}>
          {children}
        </Link>
      );
    } else {
      // external link
      return (
        <a {...btnProps} href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
  } else {
    //  as a button
    return (
      <button {...btnProps} onClick={onClick}>
        {children}
      </button>
    );
  }
};
