import { useStaticQuery, graphql } from "gatsby";

export const useWpBasicInfo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        wp {
          generalSettings {
            title
            description
            language
            dateFormat
          }
          readingSettings {
            postsPerPage
          }
        }
      }
    `
  );

  return data?.wp;
};
