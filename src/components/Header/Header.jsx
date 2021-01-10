import React from "react";
import { Container, Heading, Flex } from "@chakra-ui/react";
import { StyledHeader } from "./Header.styles";
import HeaderMenu from "../HeaderMenu";
import { useWpBasicInfo } from "../../static-queries/wp";
import { Link } from "gatsby";

const Header = () => {
  const wpInfo = useWpBasicInfo();

  return (
    <StyledHeader>
      <Container maxW="7xl">
        <Flex align="center" justify="space-between">
          <Link to="/">
            <Heading>{wpInfo.generalSettings.title}</Heading>
          </Link>
          <HeaderMenu></HeaderMenu>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
