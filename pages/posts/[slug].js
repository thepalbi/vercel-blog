import Home from "../../containers/Home";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import MetaHead from "../../components/MetaHead";
import PostContent from "../../components/PostContent";
import PostTitle from "../../components/PostTitle";
import PostDetails from "../../components/PostDetails";
import PostCoverImage from "../../components/PostCoverImage";
import metaData from "../../lib/data";
import { prettyPrintDate } from "../../lib/date";

export default function Post({ post }) {
  let coverImage;
  if (post.coverImage) {
    coverImage = <PostCoverImage image={post.coverImage} />;
  }
  let formattedDate = prettyPrintDate(post.date);
  return (
    <Home>
      <MetaHead
        title={metaData.title}
        description={metaData.description}
        url={metaData.url}
        image={metaData.image}
      />
      <article className="flex flex-col max-w-5xl px-2 mx-auto space-y-4">
        <div className="flex flex-col my-6 space-y-3">
          <PostTitle title={post.title} />
          <PostDetails author={post.author} date={formattedDate} />
          {coverImage}
          <PostContent content={post.content} />
        </div>
      </article>
    </Home>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug.endsWith('.md') ? params.slug : params.slug + '.md';
  const post = getPostBySlug(slug, [
    "tag",
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = post.content || "";

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
  const posts = getAllPosts(["slug"]);

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
