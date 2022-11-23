import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type BouncingBallProps = {
  animation?: any;
};

export const BouncingBall: React.FC<BouncingBallProps> = ({ animation }) => {
  let ballRef = useRef(null) as any;

  useEffect(() => {
    gsap['to']([ballRef], {});
  }, [ballRef]);

  return (
    <div className="bouncing-ball">
      <div className="bouncing-ball__ball" ref={(el) => (ballRef = el)} />
    </div>
  );
};
