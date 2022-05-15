import { IGatsbyImageData } from 'gatsby-plugin-image';

export type Project = {
  title: string;
  link: string;
  tools: string[];
  company: string;
  html?: string;
  github: string;
  image?: IGatsbyImageData;
};

export type Blog = {
  title: string;
  slug: string;
  date: Date;
  excerpt?: string;
  featuredImage?: IGatsbyImageData;
  layout?: 'inline' | 'stacked';
};

export type Experience = {
  title: string;
  duration: string;
  company: string;
  description: string;
};
