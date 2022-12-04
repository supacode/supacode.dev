import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import { markdownToHtml } from 'lib/markdownToHtml';
import { BlogPost } from 'modules/blog/BlogPost';
import { Blog as BlogType } from 'modules/blog/types';
import { getAllPosts } from 'modules/blog/api/getAllPosts';
import { getEntryBySlug } from 'lib/getEntryBySlug';
import 'prismjs/themes/prism-solarizedlight.min.css';
import { sideData } from 'constants/siteData';

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

  return (
    <>
      <Head>
        <title>
          {post.title} | {sideData.title}
        </title>
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
  const post = getEntryBySlug<PostType>({
    slug: params.slug,
    fields: [
      'title',
      'date',
      'slug',
      'author',
      'content',
      'ogImage',
      'coverImage',
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
