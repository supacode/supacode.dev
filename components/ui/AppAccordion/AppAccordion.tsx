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

  const clickHandler = () => setIsActive(!isActive);

  return (
    <div className="accordion" tabIndex={0}>
      <div id={`experience-${index}`}>
        <div
          className="accordion__btn"
          onClick={clickHandler}
          aria-expanded={isActive}
          role="button"
          aria-controls={`experience-body-${index}`}
          aria-label={
            title ? (isActive ? `Expand ${title}` : `Collapse ${title}`) : ''
          }
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
        tabIndex={isActive ? 0 : -1}
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
