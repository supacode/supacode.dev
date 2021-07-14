import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import {
  docker,
  typescript,
  react,
  vuejs,
  scss,
  k8s,
  postgres,
  nodejs,
  graphql,
  html5,
  mongodb,
  javascript,
  firebase,
  tailwind,
  git,
  jest,
} from '../../../assets/icons/icons';
import './about.scss';
import { AppLink } from '../../AppLink';

export interface AboutProps {}

const skills = [
  { name: 'HTML', icon: html5 },
  { name: 'CSS/SCSS', icon: scss },
  { name: 'TailwindCSS', icon: tailwind },
  { name: 'Javascript', icon: javascript },
  { name: 'Typescript', icon: typescript },
  { name: 'VueJS', icon: vuejs },
  { name: 'React/React Native', icon: react },
  { name: 'NodeJS', icon: nodejs },
  { name: 'Firebase', icon: firebase },
  { name: 'GraphQL', icon: graphql },
  { name: 'Postgres', icon: postgres },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Docker', icon: docker },
  { name: 'Kurbernetes', icon: k8s },
  { name: 'Git', icon: git },
  { name: 'Software Testing', icon: jest },
];

export const About: React.FC<AboutProps> = () => {
  return (
    <div id="#about">
      <h2 className="about__heading">
        A little <span>About Me</span>
      </h2>

      <div className="about">
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

        <div className="about__img">
          <StaticImage
            className="about__img--img"
            src="../../../images/maverick.jpg"
            width={500}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Maverick"
          />
        </div>
      </div>
    </div>
  );
};
