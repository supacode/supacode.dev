import Link from 'next/link';

type AppLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const AppLink: React.FC<AppLinkProps> = ({
  href,
  children,
  className,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a className={className} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};
