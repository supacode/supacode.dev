import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import { BlogPost } from '../../modules/blog/BlogPost';
import type { Blog as BlogType } from '../../modules/blog/types';
import Head from 'next/head';
import 'prismjs/themes/prism-solarizedlight.min.css';

type Props = {
  post: BlogType & {
    content: string;
  };
};

const Post: React.FC<Props> = ({ post }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <p>Loading</p>
      ) : (
        <>
          <Head>
            <title>{post.title}</title>
          </Head>
          <article>
            <BlogPost post={post} />
          </article>
        </>
      )}
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
