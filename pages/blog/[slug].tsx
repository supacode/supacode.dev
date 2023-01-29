import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import { siteData } from 'consts';
import { markdownToHtml } from 'lib/markdownToHtml';
import { BlogPost } from 'modules/blog/BlogPost';
import { Blog as BlogType } from 'modules/blog/types';
import { getAllPosts } from 'modules/blog/api/getAllPosts';
import { getEntryBySlug as getMarkdownBySlug } from 'lib/getEntryBySlug';

type PostType = BlogType & {
  content: string;
};

type Props = {
  post: PostType;
};

const Posts: React.FC<Props> = ({ post }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <p>Loading</p>;
  }

  const pageTitle = `${post.title} | ${siteData.title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta name="description" content={post.excerpt} />

        <meta property="og:description" content={post.excerpt} />

        <meta property="og:type" content="article" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:image" content={post.coverImage} />
      </Head>

      <BlogPost post={post} />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getMarkdownBySlug<PostType>({
    slug: params.slug,
    keys: [
      'author',
      'content',
      'coverImage',
      'date',
      'excerpt',
      'ogImage',
      'slug',
      'title',
    ],
    dir: 'content/blogs',
  });

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: true,
  };
};

export default Posts;
