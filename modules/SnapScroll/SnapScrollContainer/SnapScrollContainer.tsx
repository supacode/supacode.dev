import classNames from 'classnames';

type SnapScrollContainerProps = {
  children: React.ReactNode;
};

export const SnapScrollContainer: React.FC<SnapScrollContainerProps> = ({
  children,
}) => (
  <main className={classNames('snap-scroll-container')} id="content">
    <div className="snap-scroll-container__inner">{children}</div>
  </main>
);
