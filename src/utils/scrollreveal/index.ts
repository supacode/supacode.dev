import ScrollReveal from 'scrollreveal';

const isBrowser = typeof window === 'undefined';

const scrollReveal = isBrowser ? null : ScrollReveal();

export default scrollReveal;
