import { viewports } from '../../constants/config';
import { useWindowSize } from '../../hooks';
import { SocialLinks } from '../soclalLinks';
import styles from './hero.module.scss';

export const Hero: React.FC = () => {
  const { width } = useWindowSize();

  const isDesktop = width > viewports.screenXlMin;

  return (
    <section className={styles.hero} id="content">
      <div className={styles.hero__left}>
        <h2 className={styles['hero__lead-text']}>
          My name is <span>Maverick</span>.
        </h2>
        <h3 className={styles['hero__tag-text']}>
          I code for fun, and as a job.
        </h3>

        <p className={styles['hero__desc-text']}>
          <span aria-label="emoji wave">👋🏽</span> &nbsp; Hey there! I&apos;m
          Maverick, a Software Developer with a primary focus on Frontend
          Engineering. <br />
          Welcome to my little corner of the web, where I share notes, code
          snippets, and resources on topics that interest me.
        </p>

        <div className={styles['hero__btn']}>
          {/* <AppLink
            icon={chevronRight}
            text="Contact Me"
            title="Send me an email"
            href="mailto:supacode@gmail.com"
          /> */}
        </div>
      </div>

      <SocialLinks direction={isDesktop ? 'stacked' : 'inline'} />
    </section>
  );
};
