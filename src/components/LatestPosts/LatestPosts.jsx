import React from "react";
import PostItem from "../PostItem";
import { Heading, VStack, Wrap } from "@chakra-ui/react";
import { useLatestPosts } from "../../static-queries/post";

const LatestPosts = () => {
  const latestPostsData = useLatestPosts();

  const postsList = latestPostsData.map((post, index) => {
    return (
      <PostItem
        key={`postItem${index}`}
        title={post.title}
        slug={post.slug}
        excerpt={post.excerpt}
        featuredImage={post.featuredImage?.node}
      />
    );
  });

  return (
    <Wrap>
      <Heading size="md" mb="4">Latest Posts</Heading>
      <VStack spacing="20px">{postsList}</VStack>
    </Wrap>
  );
};

export default LatestPosts;
