import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { tools } from '../../../assets/icons';
import './about.scss';
import { AppLink } from '../../AppLink';

export interface AboutProps {}

const skills = [
  { name: 'HTML', icon: tools.html5 },
  { name: 'CSS/SCSS', icon: tools.scss },
  { name: 'TailwindCSS', icon: tools.tailwind },
  { name: 'Javascript', icon: tools.javascript },
  { name: 'Typescript', icon: tools.typescript },
  { name: 'VueJS', icon: tools.vuejs },
  { name: 'React/React Native', icon: tools.react },
  { name: 'NodeJS', icon: tools.nodejs },
  { name: 'Firebase', icon: tools.firebase },
  { name: 'GraphQL', icon: tools.graphql },
  { name: 'Postgres', icon: tools.postgres },
  { name: 'MongoDB', icon: tools.mongodb },
  { name: 'Docker', icon: tools.docker },
  { name: 'Kubernetes', icon: tools.k8s },
  { name: 'Git', icon: tools.git },
  { name: 'Software Testing', icon: tools.jest },
];

export const About: React.FC<AboutProps> = () => {
  return (
    <>
      <h2 className="about__heading">
        A little <span>About Me</span>
      </h2>
      <div className="about">
        <div className="about__img">
          <StaticImage
            className="about__img--img"
            src="../../../images/maverick.jpg"
            alt="Maverick"
            quality={50}
          />
        </div>

        <div className="about__content">
          <p>
            I started Software Development in 2015 as a hobby, just out of
            curiosity after reading that video games are made from computer
            programming.
          </p>
          <p>
            I've been working professionally as a Software Developer for the
            last ~3 years. I'm currently contracting as a Frontend Engineer with{' '}
            <AppLink external href="https://neighborhoods.com" clearStyles>
              Neighborhoods.com™
            </AppLink>{' '}
            (a real estate resource company in Chicago).
          </p>
          <p>
            Here are some technologies I enjoy working with:
            <ul className="tools">
              {skills.map((skill) => (
                <li key={skill.name} className="tools__tool">
                  <span className="tools__tool--icon">{skill.icon}</span>
                  <span className="tools__tool--name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};
