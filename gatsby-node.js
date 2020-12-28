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
};
