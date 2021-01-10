import { Container, Divider } from "@chakra-ui/react";
import React from "react";
import LatestPosts from "../../components/LatestPosts";
import Layout from "../../components/Layout";
import PageContent from "../../components/PageContent";
import { useWpFrontPage } from "../../static-queries/page";

const Home = () => {
  const frontPageData = useWpFrontPage();

  return (
    <Layout>
      <PageContent
        title={frontPageData.title}
        content={frontPageData.content}
        containerSize="xl"
        textAlign="center"
      />
      <Container>
        <Divider my="5" />
        <LatestPosts />
      </Container>
    </Layout>
  );
};

export default Home;
