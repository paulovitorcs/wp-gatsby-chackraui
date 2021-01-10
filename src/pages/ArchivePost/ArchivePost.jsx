import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Layout from "../../components/Layout";
import PostItem from "../../components/PostItem/PostItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ArchivePost = (props) => {
  const { pageContext } = props;
  const posts = pageContext?.data?.allWpPost?.nodes;
  const postsPerPage = 3;
  const [postsCount, setPostsCount] = useState(postsPerPage);
  const [postsToShow, setPostsToShow] = useState([]);
  let postsList = [];

  const setPostsList = (limit) => {
    const slicedPosts = posts.slice(0, limit);
    postsList = [...postsList, ...slicedPosts];
    setPostsToShow(postsList);
  };

  const loadMorePosts = () => {
    const newCount = postsCount + postsPerPage;
    setPostsCount(newCount);
    setPostsList(newCount);
  };

  useEffect(() => {
    setPostsList(postsCount);
  }, []);

  const loadMoreButton =
    postsCount < posts.length ? (
      <HStack justify="center" mt="3">
        <Button onClick={loadMorePosts}>Load More Posts</Button>
      </HStack>
    ) : null;

  const postsDisplay = postsToShow.map((post, index) => {
    return (
      <Box p="3" key={`post${index}`}>
        <PostItem
          title={post.title}
          slug={post.slug}
          excerpt={post.excerpt}
          featuredImage={post.featuredImage?.node}
        />
      </Box>
    );
  });

  return (
    <Layout>
      <Container maxW="7xl">
        <ContentHeader title="Blog" />
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>{postsDisplay}</Masonry>
        </ResponsiveMasonry>
        {loadMoreButton}
      </Container>
    </Layout>
  );
};

export default ArchivePost;
