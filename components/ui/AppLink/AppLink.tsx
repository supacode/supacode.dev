import Link from 'next/link';

type AppLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const AppLink: React.FC<AppLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};
