import fs from 'fs';
import { join } from 'path';
import { getEntryBySlug } from './getEntryBySlug';
import type { Blog } from '../modules/blog/types';

export const getAllPosts = (fields: string[]): Blog[] => {
  const dir = 'content/blogs';

  const postsDirectory = join(process.cwd(), dir);

  const slugs = fs.readdirSync(postsDirectory);

  const posts = slugs
    .map((slug) => getEntryBySlug<Blog>({ dir, slug, fields }))
    .sort((prevPost, nextPost) => (prevPost.date > nextPost.date ? -1 : 1));

  return posts;
};
