type SnapSectionProps = {
  children: React.ReactNode;
};

export const SnapSection: React.FC<SnapSectionProps> = ({ children }) => (
  <div className="snap-section">{children}</div>
);

SnapSection.displayName = 'modules/SnapScroll/SnapSection';
