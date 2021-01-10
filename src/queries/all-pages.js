const ALL_PAGES = `
  query {
    allWpPage {
      nodes {
        content
        title
        slug
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;

exports.ALL_PAGES = ALL_PAGES;
