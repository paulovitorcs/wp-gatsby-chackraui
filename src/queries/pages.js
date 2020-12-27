import { useStaticQuery, graphql } from "gatsby";

export const getFrontPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        wpPage(isFrontPage: { eq: true }) {
          title
          content
        }
      }
    `
  );

  return data?.wpPage;
};
