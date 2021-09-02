import React, { useState } from 'react';
import cn from 'classnames';

import './accordion.scss';
import { chevronRight } from '../../assets/icons';

interface AccordionProps {
  title: string;
  company: string;
  duration?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  duration,
  company,
}) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => setIsActive(!isActive);

  return (
    <div className={'accordion'}>
      <button className="accordion__btn" type="button" onClick={clickHandler}>
        <div className="accordion__head">
          <h3 className="accordion__title">
            {title} <span>{company}</span>
          </h3>
          <p className="accordion__duration">{duration}</p>
        </div>

        <span
          className={cn('accordion__icon', {
            'accordion__icon--active': isActive,
          })}
        >
          {chevronRight}
        </span>
      </button>

      <div
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
