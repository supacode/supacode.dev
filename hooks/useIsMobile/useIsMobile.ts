import { useWindowSize } from 'usehooks-ts';

import { breakpoints } from 'consts/index';
import { isBrowser } from 'utils';

export const useIsMobile = () => {
  if (!isBrowser) return false;

  const { width } = useWindowSize();

  return width <= breakpoints.md;
};
