exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //Home Page
  createPage({
    path: "/",
    component: require.resolve("./src/pages/Home"),
  });

  //Single Post
  const { ALL_POSTS } = require("./src/queries/all-posts");
  const allPostsData = await graphql(ALL_POSTS);

  allPostsData.data.allWpPost.nodes.forEach((post) => {
    createPage({
      path: `/post/${post.slug}`,
      component: require.resolve("./src/pages/SinglePost"),
      context: post,
    });
  });

  //Archive Post
  createPage({
    path: "/blog",
    component: require.resolve("./src/pages/ArchivePost"),
    context: allPostsData
  });

  // Single Page
  const { ALL_PAGES } = require("./src/queries/all-pages");
  const allPagesData = await graphql(ALL_PAGES);

  allPagesData.data.allWpPage.nodes.forEach((page) => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/pages/SinglePage"),
      context: page,
    });
  });
};
