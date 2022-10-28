import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
// import  from 'prismjs/plugins/line-numbers/prism-line-numbers';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown);
  return result.toString();
}
