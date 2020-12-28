const ALL_POSTS = `
  query {
    allWpPost {
      nodes {
        date
        author {
          node {
            name
          }
        }
        slug
        title
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        content
      }
    }
  }
`;

exports.ALL_POSTS = ALL_POSTS;
