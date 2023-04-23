import { forwardRef, ReactNode } from 'react';

export type SnapSectionProps = {
  children: ReactNode;
};

export const SnapSection = forwardRef<HTMLDivElement, SnapSectionProps>(
  ({ children }, ref) => (
    <div ref={ref} className="snap-section">
      {children}
    </div>
  ),
);

SnapSection.displayName = 'modules/SnapScroll/SnapSection';
