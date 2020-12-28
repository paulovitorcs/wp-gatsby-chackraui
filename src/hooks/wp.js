import { useStaticQuery, graphql } from "gatsby";

export const useWpBasicInfo = () => {
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
