import { useState, useCallback } from 'react';
import cn from 'classnames';

import { chevronRight } from 'assets/icons';

interface AppAccordionProps {
  children?: React.ReactNode;
  head?: React.ReactNode;
  index: number;
  title?: string;
}

export const AppAccordion: React.FC<AppAccordionProps> = ({
  children,
  head,
  index,
  title,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') toggleAccordion();
    },
    [toggleAccordion],
  );

  return (
    <div className="accordion">
      <div id={`experience-${index}`}>
        <div
          className="accordion__btn"
          onClick={toggleAccordion}
          onKeyDown={handleKeyDown}
          aria-expanded={isActive}
          role="button"
          tabIndex={0}
          aria-controls={`experience-body-${index}`}
          aria-label={isActive ? `Collapse ${title}` : `Expand ${title}`}
        >
          <div className="accordion__head">{head && head}</div>

          <span
            className={cn('accordion__icon', {
              'accordion__icon--active': isActive,
            })}
          >
            {chevronRight}
          </span>
        </div>
      </div>

      <div
        aria-labelledby={`experience-${index}`}
        id={`experience-body-${index}`}
        className={cn('accordion__item', {
          'accordion__item--collapsed': !isActive,
          'accordion__item--animated': isActive,
        })}
      >
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
};

AppAccordion.displayName = 'components/AppAccordion';
