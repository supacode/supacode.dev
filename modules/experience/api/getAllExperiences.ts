import fs from 'fs';
import { join } from 'path';
import { getEntryBySlug } from 'lib/getEntryBySlug';
import type { Experience } from 'modules/experience/types';

export const getAllExperiences = (): Experience[] => {
  const dir = 'content/experience';

  const postsDirectory = join(process.cwd(), dir);

  const slugs = fs.readdirSync(postsDirectory);

  const fields = [
    'company',
    'content',
    'duration',
    'index',
    'link',
    'location',
    'title',
    'tools',
    'website',
  ];

  const experiences = slugs
    .map((slug) => getEntryBySlug<Experience>({ slug, fields, dir }))
    .sort((prevExp, nextExp) => (prevExp.index > nextExp.index ? -1 : 1));

  return experiences;
};
