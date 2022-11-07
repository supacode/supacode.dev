import fs from 'fs';
import { join } from 'path';
import { getEntryBySlug } from './getEntryBySlug';
import type { Experience } from 'components/ExperienceSection';

export const getAllExperiences = (): Experience[] => {
  const dir = 'content/experience';

  const postsDirectory = join(process.cwd(), dir);

  const slugs = fs.readdirSync(postsDirectory);

  const fields = [
    'tools',
    'title',
    'duration',
    'company',
    'location',
    'content',
    'index',
    'link',
  ];

  const experiences = slugs
    .map((slug) => getEntryBySlug<Experience>({ slug, fields, dir }))
    .sort((prevExp, nextExp) => (prevExp.index > nextExp.index ? -1 : 1));

  return experiences;
};
