import { forwardRef } from 'react';

export type SnapSectionProps = {
  children: React.ReactNode;
};

export const SnapSection = forwardRef<HTMLDivElement, SnapSectionProps>(
  ({ children }, ref) => (
    <div ref={ref} className="snap-section">
      {children}
    </div>
  ),
);

SnapSection.displayName = 'modules/SnapScroll/SnapSection';
