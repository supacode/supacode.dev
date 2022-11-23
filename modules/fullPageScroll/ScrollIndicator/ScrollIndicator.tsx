import cn from 'classnames';

type ScrollIndicatorProps = {
  count: number;
  activeIndex: number;
  setIndicator: (index: number) => void;
};

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  activeIndex,
  count,
  setIndicator,
}) => {
  if (count <= 1) return null;

  return (
    <div className="scroll-indicator">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={cn('scroll-indicator__item', {
            'scroll-indicator__item--active': index === activeIndex - 1,
          })}
          onClick={() => setIndicator(index + 1)}
        />
      ))}
    </div>
  );
};
