import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';

import { SnapIndicator } from '../SnapIndicator';
import { SnapSection } from '../SnapSection';

export type SnapContainerProps = {
  sections: {
    id: string;
    section: JSX.Element;
  }[];
  className?: string;
};

export const SnapContainer: React.FC<SnapContainerProps> = ({
  className,
  sections,
}) => {
  // Reference to the container div
  const containerRef = useRef<HTMLDivElement>(null);

  // State to keep track of the active section index
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Function to handle scroll events
    const handleScroll = () => {
      // If the container ref or callback is not set, exit the function
      if (!containerRef.current) return;

      // Get all child elements of the container
      const sectionElements = containerRef.current.children;

      // Get the current scroll position of the container
      const { scrollTop } = containerRef.current;

      // Initialize the accumulated height of sections
      let accumulatedHeight = 0;

      const threshold = 200;

      // Iterate through the child elements to find the active section
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i] as HTMLDivElement;
        accumulatedHeight += section.clientHeight;

        // If the scroll position is less than the adjusted accumulated height, set the active section
        if (scrollTop < accumulatedHeight - threshold) {
          setActiveSection(i);
          break;
        }
      }
    };

    // Add a scroll event listener to the container
    containerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [setActiveSection]);

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;

    const sectionElements = containerRef.current.children;
    if (sectionElements[index]) {
      (sectionElements[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div ref={containerRef} className={cn('snap-container', className)}>
        {/* {children} */}
        {sections.map((section, index) => (
          <SnapSection key={index}>{section.section}</SnapSection>
        ))}
      </div>

      <SnapIndicator
        sections={sections}
        activeIndex={activeSection}
        onItemClick={scrollToSection}
      />
    </>
  );
};

SnapContainer.displayName = 'modules/SnapScroll/SnapContainer';
