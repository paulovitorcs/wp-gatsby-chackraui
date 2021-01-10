import React from "react";
import Layout from "../../components/Layout";
import PageContent from "../../components/PageContent/PageContent";

const SinglePost = (props) => {
  const { pageContext } = props;
  const { content, featuredImage, slug, title } = pageContext;

  return (
    <Layout>
      <PageContent
        title={title}
        content={content}
        featuredImage={featuredImage}
      />
    </Layout>
  );
};

export default SinglePost;
