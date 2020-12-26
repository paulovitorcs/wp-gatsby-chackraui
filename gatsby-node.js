exports.createPages = ({ actions }) => {
    const {createPage} = actions;

    //Home Page
    createPage({
        path: `/`,
        component: require.resolve(`./src/pages/Home`),
    });
}