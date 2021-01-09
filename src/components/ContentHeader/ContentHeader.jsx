import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Box, Container, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentHeader = (props) => {
  const { title, author, date, featuredImage } = props;
  const formatedDate = moment(date).format("DD/MM/YYYY");

  console.log(featuredImage);

  const imageDisplay = featuredImage ? <Image mt="10" objectFit="cover" src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText} /> : null;

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
    <Container maxW="5xl" mb="10">
      <HStack mb="2" spacing="10" justify="center">
        {authorDisplay}
        {dateDisplay}
      </HStack>
      <Heading size="4xl" style={{ textAlign: "center" }}>
        {title}
      </Heading>
      {imageDisplay}
    </Container>
  );
};

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string,
  featuredImage: PropTypes.object,
};

export default ContentHeader;
