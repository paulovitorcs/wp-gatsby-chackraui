import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ChakraProvider, Container } from "@chakra-ui/react";
import GoogleFontLoader from "react-google-font-loader";
import theme from "../../../assets/theme";
import fonts from "../../../assets/fonts";
import Header from "../Header";

library.add(fas);

const Layout = (props) => {
  const { children } = props;

  return (
    <ChakraProvider theme={theme}>
      <GoogleFontLoader fonts={fonts} />
      <Header />
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
