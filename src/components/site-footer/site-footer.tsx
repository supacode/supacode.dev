import React from 'react';
import { useScrollReveal } from '../../hooks';

import { SocialLinks } from '../social-links';
import './site-footer.scss';

export const SiteFooter: React.FC = () => {
  useScrollReveal({ selector: '.site-footer' });

  useScrollReveal({
    selector: '.site-footer__desc',
    options: {
      delay: 100,
    },
  });

  return (
    <footer className="site-footer" id="contact">
      <h2 className="site-footer__lead-txt">Reach out to me!</h2>

      <p className="site-footer__desc">
        Do you want us to work together? Maybe you just want to say Hello!
        <br />
        Don&apos;t be shy, you can reach out to me anytime.
      </p>

      <SocialLinks direction="inline" />
    </footer>
  );
};
