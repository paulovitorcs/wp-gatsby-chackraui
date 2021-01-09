import React from "react";
import { Container, Divider, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Container maxW="8xl" my="5" centerContent>
        <Divider mb="3"></Divider>
        <Text fontSize="md">
          Developed by{" "}
          <a href="http://paulovitorcs.com/" target="_blank">
            @paulovitorcs
          </a>
          , using{" "}
          <a href="" target="blank">
            Wordpress
          </a>
          ,{" "}
          <a href="" target="blank">
            Gatsby{" "}
          </a>
          and{" "}
          <a href="" target="blank">
            Chackra UI
          </a>
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
