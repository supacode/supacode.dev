import Link from 'next/link';
import aboutImg from '../../assets/images/mave.jpeg';
import Image from 'next/image';
import { tools } from '../../assets/icons';
import { AppImage } from '../ui/AppImage';

const skills = [
  { name: 'HTML', icon: tools.html5 },
  { name: 'CSS/SCSS', icon: tools.scss },
  { name: 'TailwindCSS', icon: tools.tailwind },
  { name: 'Javascript', icon: tools.javascript },
  { name: 'Typescript', icon: tools.typescript },
  { name: 'VueJS', icon: tools.vuejs },
  { name: 'React/React Native', icon: tools.react },
  { name: 'Redux', icon: tools.redux },
  { name: 'GraphQL', icon: tools.graphql },
  { name: 'Webpack', icon: tools.webpack },
  { name: 'NodeJS', icon: tools.nodejs },
  { name: 'Firebase', icon: tools.firebase },
  { name: 'Postgres', icon: tools.postgres },
  { name: 'MongoDB', icon: tools.mongodb },
  { name: 'Docker', icon: tools.docker },
  { name: 'AWS', icon: tools.aws },
  { name: 'Kubernetes', icon: tools.k8s },
  { name: 'Git', icon: tools.git },
  { name: 'Software Testing', icon: tools.jest },
];

export const AboutSection: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="about__img">
        <AppImage
          src={aboutImg}
          loading="lazy"
          alt="Maverick"
          className="about__img--img"
          placeholder="blur"
          width={500}
          height={500}
        />
      </div>

      <div className="about__content">
        <h2 className="about__title">
          A little <span className="about__title--highlight">About Me</span>
        </h2>
        <p className="about__text">
          I started Software Development in 2015 as a hobby, just out of
          curiosity after reading that video games are made from computer
          programming.
        </p>
        <p className="about__text">
          I&apos;ve been working professionally as a Software Developer for the
          last ~4 years. I&apos;m currently a Frontend Engineer at{' '}
          <Link href="https://neighborhoods.com" target="_blank">
            Neighborhoods.com™
          </Link>{' '}
          (a real estate resource company in Chicago).
        </p>

        <p className="about__text">
          Here are some technologies I enjoy working with:
        </p>

        <ul className="tools">
          {skills.map((skill) => {
            return (
              <li key={skill.name} className="tools__tool">
                <span className="tools__tool--icon">{skill.icon}</span>
                <span className="tools__tool--name">{skill.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
