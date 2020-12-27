import { Divider } from "@chakra-ui/react";
import React from "react";
import LatestPosts from "../../components/LatestPosts";
import Layout from "../../components/Layout";
import PageContent from "../../components/PageContent";
import {getFrontPage} from "../../queries/pages";

const Home = () => {
  const frontPageData = getFrontPage();

  return (
    <Layout>
      <PageContent title={frontPageData.title} content={frontPageData.content} />
      <Divider my="5"/>
      <LatestPosts />
    </Layout>
  );
};

export default Home;
