import { useStaticQuery, graphql } from "gatsby";

export const useLatestPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allWpPost(limit: 3) {
          nodes {
            date
            author {
              node {
                name
              }
            }
            slug
            title
            excerpt
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    `
  );

  return data?.allWpPost?.nodes;
};
