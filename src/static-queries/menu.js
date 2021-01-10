import { useStaticQuery, graphql } from "gatsby";

export const useWpMenu = () => {
  const data = useStaticQuery(
    graphql`
      query {
        wpMenu(locations: {eq: GATSBY_HEADER_MENU}) {
          menuItems {
            nodes {
              label
              path
              target
            }
          }
          name
        }
      }
    `
  );

  return data?.wpMenu;
};
