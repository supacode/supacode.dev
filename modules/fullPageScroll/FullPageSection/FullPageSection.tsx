type FullPageSectionProps = {
  children: React.ReactNode;
};

export const FullPageSection: React.FC<FullPageSectionProps> = ({
  children,
}) => <div className={'fp-section'}>{children}</div>;
