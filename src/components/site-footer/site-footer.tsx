import React from 'react';

import { SocialLinks } from '../social-links';
import './site-footer.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
type SiteFooterProps = {};

export const SiteFooter: React.FC<SiteFooterProps> = () => {
  return (
    <footer className="site-footer">
      <h2 className="site-footer__lead-txt">Let&apos;s Work Together</h2>
      <p className="site-footer__desc">
        Do you want us to work together? Maybe you just want to say Hello!
        <br />
        Don&apos;t be shy, you can reach out to me anytime.
      </p>
      <SocialLinks direction="inline" />
    </footer>
  );
};
