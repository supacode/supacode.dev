import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type getEntryBySlugType = {
  slug: string;
  keys: string[];
  dir: string;
};

export const getEntryBySlug = <T>({
  keys: fields,
  slug,
  dir,
}: getEntryBySlugType): T => {
  const realSlug = slug.replace(/\.md$/, '');

  const fullPath = join(dir, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents, {});

  const items: {
    [key: string]: string;
  } = {};

  fields.forEach((field) => {
    if (field === 'slug') items[field] = realSlug;

    if (field === 'content') items[field] = content;

    if (typeof data[field] !== 'undefined') items[field] = data[field];
  });

  return items as T;
};
