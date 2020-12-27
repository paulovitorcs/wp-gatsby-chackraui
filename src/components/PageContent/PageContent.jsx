import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { Wrap, Box, Heading } from "@chakra-ui/react";

const PageContent = (props) => {
  const { title, content } = props;

  return (
    <Wrap>
      <Box w="100%">
        <Heading as="h1" mb="3">
          {title}
        </Heading>
      </Box>
      <Box>
        {ReactHtmlParser(content)}
      </Box>
    </Wrap>
  );
};

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PageContent;
