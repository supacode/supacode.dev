import AboutImg from 'assets/images/mave.jpeg';
import { tools } from 'assets/icons';
import { AppImage } from 'components/ui/AppImage';
import { AppLink } from 'components/ui/AppLink';

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

export const AboutSection: React.FC = () => (
  <section className="about" id="about">
    <h2 className="about__title">
      A little <span className="about__title--highlight">About Me</span>
    </h2>

    <div className="about__content">
      <p className="about__content--text">
        I started Software Development in 2015 as a hobby, just out of curiosity
        after reading that video games are made from computer programming.
      </p>
      <p className="about__content--text">
        I&apos;ve been working professionally as a Software Developer for the
        last ~5 years. I&apos;m currently a Senior Frontend Engineer at{' '}
        <AppLink
          to="https://instafreight.de"
          target="_blank"
          rel="noreferrer noopener"
        >
          InstaFreight
        </AppLink>{' '}
        (a logistics company in Germany). When I&apos;m not programming,
        I&apos;m playing{' '}
        <AppLink
          to="https://www.youtube.com/channel/UCCAT1AZ-yJYjL1IobjmnpvQ"
          target="_blank"
          rel="noreferrer noopener"
        >
          video games
        </AppLink>
        , or playing/watching football ⚽.
      </p>

      <p className="about__content--text">
        Here are some technologies I enjoy working with:
      </p>

      <ul className="tools">
        {skills.map((skill) => (
          <li key={skill.name} className="tools__tool">
            <span className="tools__tool--icon">{skill.icon}</span>
            <span className="tools__tool--name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="about__img--wrapper">
      <AppImage
        src={AboutImg}
        loading="lazy"
        alt="Maverick"
        className="about__img"
      />
    </div>
  </section>
);
