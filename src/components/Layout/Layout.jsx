import React from "react";
import PropTypes from "prop-types";
import { ChakraProvider, Container } from "@chakra-ui/react";
import GoogleFontLoader from "react-google-font-loader";
import theme from "../../../assets/theme";
import fonts from "../../../assets/fonts";

const Layout = (props) => {
  const { children } = props;

  return (
    <ChakraProvider theme={theme}>
      <GoogleFontLoader fonts={fonts} />
      <main>
        <Container>{children}</Container>
      </main>
    </ChakraProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
