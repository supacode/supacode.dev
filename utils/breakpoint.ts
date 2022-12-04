import { createBreakpoint } from 'react-use';

export const useBreakpoint = createBreakpoint({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
});
