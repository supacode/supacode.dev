import {
  useEffect,
  createRef,
  useMemo,
  useRef,
  useState,
  useCallback,
} from 'react';
import cn from 'classnames';

import { SnapIndicator } from '../SnapIndicator';
import { SnapSection } from '../SnapSection';

type SnapContainerProps = {
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
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<number>(0);

  const sectionRefs = useRef(sections.map(() => createRef<HTMLDivElement>()));

  const emptyArr: [] = [];

  const intersectionCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const intersectingEntry = entries.find((entry) => entry.isIntersecting);

      // TODO: Add section id to url
      // i.e intersectingEntry?.target.children[0].id;

      if (intersectingEntry) {
        const index = sectionRefs.current.findIndex(
          (ref) => ref.current === intersectingEntry.target,
        );

        setActiveSection(index);
      }
    },
    emptyArr,
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(intersectionCallback, {
      root: containerRef.current,
      threshold: 0.5,
    });

    const observedElements: Element[] = [];

    for (let i = 0; i < sectionRefs.current.length; i++) {
      const currentSection = sectionRefs.current[i].current;

      if (currentSection) {
        observer.observe(currentSection);
        observedElements.push(currentSection);
      }
    }

    return () =>
      observedElements.forEach((element) => observer.unobserve(element));
  }, [containerRef.current, intersectionCallback]);

  const scrollToSection = (index: number) => {
    if (!sectionRefs.current[index]?.current) return;

    sectionRefs.current[index].current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const renderedSections = useMemo(
    () =>
      sections.map(({ section, id }, index) => (
        <SnapSection key={id} ref={sectionRefs.current[index]}>
          {section}
        </SnapSection>
      )),
    [sections],
  );

  return (
    <>
      <div ref={containerRef} className={cn('snap-container', className)}>
        {renderedSections}
      </div>

      <SnapIndicator
        sections={sections}
        activeIndex={activeSection}
        onItemClick={scrollToSection}
      />
    </>
  );
};
