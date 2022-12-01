import cn from 'classnames';

import { AppLink } from 'components/ui/AppLink';

type ScrollSnapIndicatorProps = {
  sections: {
    id: string;
    section: React.ReactNode;
  }[];
  currentHash: string;
};

export const ScrollSnapIndicator: React.FC<ScrollSnapIndicatorProps> = ({
  currentHash,
  sections,
}) => {
  return (
    <div className="snap-scroll-indicator">
      {sections.map((section, index) => (
        <AppLink
          key={section.id}
          className={cn('snap-scroll-indicator__item', {
            'snap-scroll-indicator__active':
              currentHash === section.id || (!currentHash && index === 0),
          })}
          to={`#${section.id}`}
        />
      ))}
    </div>
  );
};
