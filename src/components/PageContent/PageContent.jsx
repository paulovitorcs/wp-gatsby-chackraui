import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { Box, Heading, Container } from "@chakra-ui/react";

const PageContent = (props) => {
  const { title, content } = props;

  return (
    <Container>
      <Box w="100%">
        <Heading as="h1" mb="3" size="3xl">
          {title}
        </Heading>
      </Box>
      <Box className="wysiwyg-content">
        {ReactHtmlParser(content)}
      </Box>
    </Container>
  );
};

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PageContent;
