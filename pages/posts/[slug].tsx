import Container from "../../containers/Container";
import { FullPost, getFullPost, getPostSlugs } from "../../lib/api";
import PostContent from "../../components/PostContent";
import { prettyPrintDate } from "../../lib/date";
import { GetStaticPaths, GetStaticProps } from "next";
import { css } from "@emotion/css";

export default function Post({ post }: { post: FullPost }) {
  let formattedDate = prettyPrintDate(post.date);
  return (
    <Container
      title={post.title}
    >
      <article className={css`
        margin-bottom: 30px;
      `}>
        <div>
          <p className={css`
            font-weight: 300;
          `}>
            Published on {formattedDate}.
          </p>
          <PostContent content={post.content} />
        </div>
      </article>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;
  const singleSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const slug = singleSlug.endsWith('.md') ? singleSlug : singleSlug + '.md';
  const post = getFullPost(slug);
  const content = post.content || "";

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = getPostSlugs();

  return {
    paths: postSlugs.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
};