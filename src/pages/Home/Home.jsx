import React from "react";
import Layout from "../../components/Layout";
import PageContent from "../../components/PageContent";
import {getFrontPage} from "../../queries/pages";

const Home = () => {
  const frontPageData = getFrontPage();

  return (
    <Layout>
      <PageContent title={frontPageData.title} content={frontPageData.content} />
    </Layout>
  );
};

export default Home;
