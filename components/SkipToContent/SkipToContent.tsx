import { AppLink } from 'components/ui/AppLink';

export const SkipToContent: React.FC<{ to: string }> = ({ to }) => (
  <AppLink
    title="Skip to Content"
    to={to}
    className="skip-link"
    text="Skip to Content"
    asButton
  />
);
