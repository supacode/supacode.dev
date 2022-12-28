import { forwardRef, CSSProperties } from 'react';
import cn from 'classnames';

type SnapScrollSectionProps = {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

export const SnapScrollSection = forwardRef<
  HTMLDivElement,
  SnapScrollSectionProps
>(({ children, style = {}, className = '' }, ref) => (
  <div
    ref={ref}
    className={cn('snap-scroll-section', {
      [className]: className,
    })}
    style={style}
  >
    {children}
  </div>
));
