import { useState } from 'react';
import cn from 'classnames';

import { chevronRight as chevronRightIcon } from 'assets/icons';

type AppAccordionProps = {
  children?: React.ReactNode;
  head?: React.ReactNode;
  index: number;
  title?: string;
};

export const AppAccordion: React.FC<AppAccordionProps> = ({
  children,
  head,
  index,
  title,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = (
    evt:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (evt.target instanceof HTMLAnchorElement) return;

    setIsActive(!isActive);
  };

  return (
    <div className="accordion">
      <div id={`experience-${index}`}>
        <div
          className="accordion__btn"
          onClick={toggleAccordion}
          onKeyDown={toggleAccordion}
          aria-expanded={isActive}
          role="button"
          tabIndex={0}
          aria-controls={`experience-body-${index}`}
          aria-label={title ? `Expand ${title}` : `Collapse ${title}`}
        >
          <div className="accordion__head">{head && head}</div>

          <span
            className={cn('accordion__icon', {
              'accordion__icon--active': isActive,
            })}
          >
            {chevronRightIcon}
          </span>
        </div>
      </div>

      <div
        aria-labelledby={`experience-${index}`}
        id={`experience-body-${index}`}
        // tabIndex={isActive ? 0 : -1}
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
