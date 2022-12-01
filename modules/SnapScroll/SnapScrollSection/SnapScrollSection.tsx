import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import { createRef, useEffect } from 'react';

type Section = {
  id: string;
  section: React.ReactNode;
};

type SnapScrollSectionProps = {
  children: React.ReactNode;
  onEnter?: () => void;
  currentSection?: Section;
  sections?: Section[];
};

export const SnapScrollSection: React.FC<SnapScrollSectionProps> = ({
  children,
  onEnter,
}) => {
  const sectionRef = createRef<HTMLDivElement>();
  const entry = useIntersectionObserver(sectionRef, {
    rootMargin: '-50% 0px -50% 0px',
  });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) onEnter?.();
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="snap-scroll-section">
      {children}
    </div>
  );
};
