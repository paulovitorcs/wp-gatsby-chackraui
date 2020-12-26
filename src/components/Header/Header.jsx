import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import { StyledHeader } from "./Header.styles";
import { getBasicWpInfo } from "../../queries/wp";

const Header = () => {
  const {title} = getBasicWpInfo();

  return (
    <StyledHeader>
      <Container maxW="5xl">
        <Heading>{title}</Heading>
      </Container>
    </StyledHeader>
  );
};

export default Header;
