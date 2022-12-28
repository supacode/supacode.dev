import cn from 'classnames';

type SnapScrollIndicatorProps = {
  count: number;
  slideTo: (index: number) => void;
  setCurrenSlide: (index: number) => void;
  activeIndex: number;
};

export const SnapScrollIndicator: React.FC<SnapScrollIndicatorProps> = ({
  activeIndex,
  count,
  setCurrenSlide,
  slideTo,
}) => {
  const onDotClick = (index: number) => {
    slideTo(index + 1);
    setCurrenSlide(index + 1);
  };

  return (
    <div className="snap-scroll-indicator">
      {[...new Array(count)].map((_, index) => (
        <button
          type="button"
          aria-label="Snap Scroll Indicator"
          key={index}
          onClick={() => onDotClick(index)}
          onKeyDown={() => onDotClick(index)}
          className={cn('snap-scroll-indicator__dot', {
            'snap-scroll-indicator__dot--active': index + 1 === activeIndex,
          })}
        />
      ))}
    </div>
  );
};
