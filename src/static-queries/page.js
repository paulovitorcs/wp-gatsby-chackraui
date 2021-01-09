import { useStaticQuery, graphql } from "gatsby";

export const useWpFrontPage = () => {
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
