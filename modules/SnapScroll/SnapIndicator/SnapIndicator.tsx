import { useMemo, ReactNode } from 'react';
import cn from 'classnames';

type SnapIndicatorProps = {
  activeIndex: number;
  onItemClick?: (index: number) => void;
  sections: {
    id: string;
    section: ReactNode;
  }[];
};

export const SnapIndicator: React.FC<SnapIndicatorProps> = ({
  activeIndex,
  sections,
  onItemClick,
}) => {
  if (!sections.length) return null;

  const itemMargin = 250;

  const handleClick = (index: number) => {
    onItemClick && onItemClick(index);
  };

  const sectionButtons = useMemo(
    () =>
      sections.map((_, itemIndex) => (
        <button
          type="button"
          aria-label={`Go to ${sections[itemIndex].id}`}
          title={`Go to ${sections[itemIndex].id}`}
          key={itemIndex}
          onClick={() => handleClick(itemIndex)}
          className="snap-indicator__item"
          style={{
            transform: `translateY(${itemIndex * itemMargin}%)`,
          }}
        />
      )),
    [sections, itemMargin, handleClick],
  );

  return (
    <div className="snap-indicator">
      <div className="snap-indicator__item--wrapper">
        <span
          className={cn('snap-indicator__item', 'snap-indicator__item--active')}
          style={{
            transform: `translateY(${activeIndex * itemMargin}%)`,
          }}
        />
        {sectionButtons}
      </div>
    </div>
  );
};

SnapIndicator.displayName = 'modules/SnapScroll/SnapIndicator';
