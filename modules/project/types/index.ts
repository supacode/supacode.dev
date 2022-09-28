import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  tools: string[];
  github?: string;
  link?: string;
  company?: string;
  html?: string;
  image?: StaticImageData;
};
