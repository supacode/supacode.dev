import cn from 'classnames';

import { SocialLinks } from 'components/SocialLinks';

type AppFooterProps = {
  fullHeight?: boolean;
  footerId?: string;
};

export const AppFooter: React.FC<AppFooterProps> = ({
  fullHeight,
  footerId,
}) => (
  <div
    id={footerId}
    className={cn('app-footer__container', {
      'app-footer__container--full-height': !fullHeight,
    })}
  >
    <footer className="app-footer" id="contact">
      <h2 className="app-footer__lead-txt">Reach out to me!</h2>

      <p className="app-footer__txt">
        Do you want us to work together? Maybe you just want to say Hello!
        <br /> Don&apos;t be shy, you can reach out to me anytime.
      </p>

      <SocialLinks direction="column" />
    </footer>
  </div>
);

AppFooter.displayName = 'components/AppFooter';
