import React from 'react';

import { Accordion } from '../ui/Accordion';

type Experience = {
  title?: string;
  duration: string;
  company: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: 'Neighborhoods.com',
    description: `Creating new features for a real estate resource website that serves more than a million users.
        A/B test features using Google Optimize.
        Worked with the team to greatly improve our Lighthouse scores, with a focus on Performance, Accessibility and SEO in my first 9 months.
        Worked primarily with React, Typescript 💙.`,
    duration: 'Feb 2021 - Present',
    title: 'Frontend Engineer',
  },
  {
    company: 'Oarbt',
    description: `Worked as a Fullstack Engineer, on an art software that converts user's uploaded media to 3D rendered art space/gallery.
    Worked primarily with ReactJS, Material UI, Express, MongoDB/Mongoose, Docker, Unity3D.`,
    duration: 'Nov 2019 - Apr 2021',
    title: 'Web Developer',
  },
  {
    company: 'FluxTech Africa',
    title: 'Web Developer',
    description:
      'Hired as a contractor to create features and maintain an event website using VueJS, NuxtJS.',
    duration: 'Oct 2020 - Dec 2020',
  },
  {
    company: 'Cloud9 ICT Solutions',
    description: `Lead a team of students on industrial training to create a Point of Sale software.
    Developed applications for Federal Government agencies mainly with PHP, Laravel and VueJS framework.
    Wrote documentation for existing in-house applications.`,
    duration: 'Oct 2018 - Mar 2019',
    title: 'Frontend Web Developer',
  },
];

export const Experience: React.FC = () => {
  return (
    <section>
      <h2 className="section__title" id="experience">
        Experience
      </h2>

      {experiences.map((exp) => {
        return (
          <div key={exp.duration}>
            <Accordion
              key={exp.title}
              title={exp.title}
              index={experiences.indexOf(exp)}
              head={
                <>
                  <span className="experience__title">
                    {exp.title} <span>{exp.company}</span>
                  </span>
                  <span className="experience__duration">{exp.duration}</span>
                </>
              }
            >
              {exp.description && (
                <div
                  className="experience__description"
                  dangerouslySetInnerHTML={{
                    __html: exp.description,
                  }}
                />
              )}
            </Accordion>
          </div>
        );
      })}
    </section>
  );
};
