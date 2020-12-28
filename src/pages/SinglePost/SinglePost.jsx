import { Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/Layout";

const SinglePost = (props) => {
  const { pageContext } = props;
  const { author, content, date, featuredImage, slug, title } = pageContext;

  return (
    <Layout>
      <Heading>{title}</Heading>
    </Layout>
  );
};

export default SinglePost;
