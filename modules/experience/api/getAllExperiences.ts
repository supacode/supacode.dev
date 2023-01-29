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

  return slugs
    .map((slug) => getEntryBySlug<Experience>({ slug, keys: fields, dir }))
    .sort((prevExp, nextExp) => (prevExp.index > nextExp.index ? -1 : 1));
};
