import React from 'react';

import './experience.scss';
import { Accordion } from '../../accordion';

export interface ExperienceProps {}

const experiences = [
  {
    title: 'Frontend Engineer',
    duration: 'Feb 2021 - Present',
    company: 'Neighborhoods.com, Chicago',
    description: 'Details coming soon.',
  },
  {
    title: 'Fullstack Developer',
    duration: 'Nov 2020 - Apr 2021',
    company: 'R&Co Developers, London',
    description: 'Details coming soon.',
  },
  {
    title: 'Web Developer',
    duration: 'Oct 2020 - Dec 2020',
    company: 'FluxTech Africa, Lagos',
    description: 'Details coming soon.',
  },
  {
    title: 'Frontend Web Developer',
    duration: 'Oct 2018 - Mar 2019',
    company: 'Cloud9 IT Solutions, Abuja',
    description: 'Details coming soon.',
  },
];

export const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div id="experience" className="experience">
      <h2 className="experience__title">Experience</h2>

      {experiences.map((ex) => (
        <div className="experience__content" key={ex.duration}>
          <Accordion
            key={ex.title}
            title={ex.title}
            company={ex.company}
            duration={ex.duration}
          >
            <p className="experience__description">{ex.description}</p>
          </Accordion>
        </div>
      ))}
    </div>
  );
};
