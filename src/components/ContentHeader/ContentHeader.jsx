import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWpBasicInfo } from "../../static-queries/wp";

const ContentHeader = (props) => {
  const {
    title,
    author,
    date,
    featuredImage,
    titleAlign,
    containerSize,
    featuredImageStyle,
  } = props;
  const wpInfo = useWpBasicInfo();
  const formatedDate = moment(date).format(wpInfo.generalSettings.dateFormat);

  const imageDisplay = (isPage) => featuredImage ? (
    <Image
      mb="4"
      mt={isPage ? "-40px" : null}
      height={isPage ? "30vh" : null}
      width="100%"
      objectFit="cover"
      src={featuredImage.node.sourceUrl}
      alt={featuredImage.node.altText}
    />
  ) : null;

  const pageImageDisplay = featuredImageStyle == "page" ? imageDisplay(true) : null;
  const postImageDisplay = featuredImageStyle == "post" ? imageDisplay(false) : null;

  const authorDisplay = author ? (
    <Flex align="center">
      <FontAwesomeIcon icon="user-alt" />
      <Text mb="0" ml="2">
        {author}
      </Text>
    </Flex>
  ) : null;

  const dateDisplay = date ? (
    <Flex align="center">
      <FontAwesomeIcon icon="calendar-alt" />
      <Text mb="0" ml="2">
        {formatedDate}
      </Text>
    </Flex>
  ) : null;

  return (
    <>
      {pageImageDisplay}
      <Container maxW={containerSize}>
        <HStack mb="2" spacing="10" justify="center">
          {authorDisplay}
          {dateDisplay}
        </HStack>
        <Heading mb="10" size="4xl" style={{ textAlign: titleAlign }}>
          {title}
        </Heading>
        {postImageDisplay}
      </Container>
    </>
  );
};

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string,
  featuredImage: PropTypes.object,
  titleAlign: PropTypes.oneOf(["center", "left", "right"]),
  containerSize: PropTypes.string,
  featuredImageStyle: PropTypes.oneOf(["post", "page"]),
};

ContentHeader.defaultProps = {
  titleAlign: "center",
  containerSize: "5xl",
  featuredImageStyle: "post",
};

export default ContentHeader;
