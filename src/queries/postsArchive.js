export const postsArchive = graphql`
  query {
    posts: allWpPost {
      nodes {
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            uri
            title
            srcSet
            altText
          }
        }
      }
    }
  }`;