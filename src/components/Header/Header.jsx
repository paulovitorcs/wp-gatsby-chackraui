import React from "react";
import { Container, Heading, Flex } from "@chakra-ui/react";
import { StyledHeader } from "./Header.styles";
import HeaderMenu from "../HeaderMenu";
import { useWpBasicInfo } from "../../static-queries/wp";

const Header = () => {
  const {title} = useWpBasicInfo();

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
