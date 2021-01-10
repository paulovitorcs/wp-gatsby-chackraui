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
        excerpt
      }
    }
  }
`;

exports.ALL_POSTS = ALL_POSTS;
