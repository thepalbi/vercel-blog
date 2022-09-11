import Container from "../containers/Container";
import { getPostsSlugTitleAndDate } from "../lib/api";
import metaData from "../lib/data";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { GetStaticProps } from "next";
import { css } from "@emotion/css";

export default function Index({ allPosts }) {
  return (
    <Container>
      <p>{metaData.description}</p>
      <div>
        <ul className={styles.postList}>
          {
            allPosts.map(post => {
              return (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Container>
  );
}

const styles = {
  postList: css`
    // Reset padding
    padding-left: 0;

    list-style: none;
    li {
      padding: 5px 0 5px 0;
    }
  `
};

export const getStaticProps: GetStaticProps = async (context) => {
  const allPosts = getPostsSlugTitleAndDate();

  allPosts.sort((post1, post2) => compareDesc(new Date(post1.date), new Date(post2.date)));

  return {
    props: { allPosts },
  };
};