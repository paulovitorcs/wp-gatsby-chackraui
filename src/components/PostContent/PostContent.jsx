import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import ContentHeader from "../ContentHeader";
import { Box, Container } from "@chakra-ui/react";

const PostContent = (props) => {
  const { title, author, date, featuredImage, content } = props;

  return (
    <Box>
      <ContentHeader
        title={title}
        author={author?.node?.name}
        date={date}
        featuredImage={featuredImage}
        featuredImageStyle="post"
      />
      <Container className="wysiwyg-content">
        {ReactHtmlParser(content)}
      </Container>
    </Box>
  );
};

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.object,
  date: PropTypes.string,
  featuredImage: PropTypes.object,
  content: PropTypes.string.isRequired,
};

export default PostContent;
