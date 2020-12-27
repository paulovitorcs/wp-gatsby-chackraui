import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { StyledPostItem } from "./PostItem.styles";
import { Link } from "gatsby";

const PostItem = (props) => {
  const { title, slug, excerpt, featuredImage } = props;

  const imageDisplay = featuredImage ? (
    <Box mb="3">
      <Image
        htmlHeight="150px"
        src={featuredImage.sourceUrl}
        alt={featuredImage?.alt}
      ></Image>
    </Box>
  ) : null;

  return (
    <StyledPostItem>
      <Link to={`/${slug}/`}>
        {imageDisplay}
        <Box w="100%" mb="3">
          <Heading size="lg">{title}</Heading>
        </Box>
        <Box w="100%" mb="3">{ReactHtmlParser(excerpt)}</Box>
        <Box w="100%" textAlign="right">
          <Link to={`/${slug}`}>
            <Heading size="sm">Read More</Heading>
          </Link>
        </Box>
      </Link>
    </StyledPostItem>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape({
    altText: PropTypes.string,
    sourceUrl: PropTypes.string.isRequired,
  }),
};

export default PostItem;
