import React from "react";
import { Container, Heading, Flex } from "@chakra-ui/react";
import { StyledHeader } from "./Header.styles";
import { getBasicWpInfo } from "../../queries/wp";
import HeaderMenu from "../HeaderMenu";

const Header = () => {
  const {title} = getBasicWpInfo();

  return (
    <StyledHeader>
      <Container maxW="7xl">
        <Flex align="center" justify="space-between">
          <Heading>{title}</Heading>
          <HeaderMenu></HeaderMenu>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
