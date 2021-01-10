import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { Box, Container } from "@chakra-ui/react";
import ContentHeader from "../ContentHeader";

const PageContent = (props) => {
  const { title, content, featuredImage, containerSize, textAlign } = props;

  return (
    <Box>
      <ContentHeader
        title={title}
        featuredImage={featuredImage}
        titleAlign={textAlign}
        containerSize={containerSize}
      />
      <Container maxW={containerSize}>
        <Box className="wysiwyg-content" style={{ textAlign: textAlign }}>{ReactHtmlParser(content)}</Box>
      </Container>
    </Box>
  );
};

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  featuredImage: PropTypes.object,
  containerSize: PropTypes.string,
  text: PropTypes.oneOf(["center", "left", "right"]),
};

PageContent.defaultProps = {
  containerSize: "5xl",
  textAlign: "left"
};

export default PageContent;
