import React, { useState } from 'react';
import cn from 'classnames';

import './accordion.scss';
import { chevronRight } from '../../assets/icons';

interface AccordionProps {
  title: string;
  company: string;
  duration?: string;
  index: number;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  duration,
  company,
  index,
}) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => setIsActive(!isActive);

  return (
    <div className={'accordion'}>
      <h3 id={`experience-${index}`}>
        <button
          className="accordion__btn"
          onClick={clickHandler}
          type="button"
          aria-expanded={isActive}
          aria-controls={`experience-body-${index}`}
          aria-label={
            isActive
              ? `Expand ${title} at ${company} accordion`
              : `Collapse ${title} at ${company} accordion`
          }
        >
          <span className="accordion__head">
            <span className="accordion__title">
              {title} <span>{company}</span>
            </span>
            <span className="accordion__duration">{duration}</span>
          </span>

          <span
            className={cn('accordion__icon', {
              'accordion__icon--active': isActive,
            })}
          >
            {chevronRight}
          </span>
        </button>
      </h3>

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
