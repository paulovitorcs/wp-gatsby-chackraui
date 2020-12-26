import { useStaticQuery, graphql } from "gatsby";

export const getBasicWpInfo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        wp {
          generalSettings {
            title
            description
          }
        }
      }
    `
  );

  return data?.wp?.generalSettings;
};
