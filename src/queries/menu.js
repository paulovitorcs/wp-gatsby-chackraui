import { useStaticQuery, graphql } from "gatsby";

export const getMenu = () => {
  const data = useStaticQuery(
    graphql`
      query {
        wpMenu(name: {eq: "Menu"}) {
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
