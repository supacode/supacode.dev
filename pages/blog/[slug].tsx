import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import markdownToHtml from 'api/markdownToHtml';
import { BlogPost } from 'modules/blog/BlogPost';
import { Blog as BlogType } from 'modules/blog/types';
import { getAllPosts } from 'api/getAllPosts';
import { getEntryBySlug } from 'api/getEntryBySlug';
import 'prismjs/themes/prism-solarizedlight.min.css';

type PostType = BlogType & {
  content: string;
};

type Props = {
  post: PostType;
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
