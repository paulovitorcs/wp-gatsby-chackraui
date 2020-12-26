import { useStaticQuery, graphql } from "gatsby";

export const getMenu = (location) => {
  const data = useStaticQuery(
    graphql`
      query {
        wpMenu(name: {eq: "Header Menu"}) {
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
