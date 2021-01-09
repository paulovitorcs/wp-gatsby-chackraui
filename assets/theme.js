import { extendTheme } from "@chakra-ui/react";
import { primary } from "./colors";

const theme = extendTheme({
  colors: {
    brand: primary
  },

  fonts: {
    body: "Darker Grotesque",
    heading: "Bree Serif"
  },

  styles: {
    global: {
      body: {
        bg: "white",
        fontSize: "xl",
        fontWeight: "medium"
      },
      h1: {
        fontSize: 60,
        fontFamily: "Bree Serif"
      },
      h2: {
        fontSize: 50,
        fontFamily: "Bree Serif"
      },
      h3: {
        fontSize: 40,
        fontFamily: "Bree Serif"
      },
      h4: {
        fontSize: 35,
        fontFamily: "Bree Serif"
      },
      h5: {
        fontSize: 30,
        fontFamily: "Bree Serif"
      },
      h6: {
        fontSize: 21,
        fontFamily: "Bree Serif"
      },
      p: {
        marginBottom: 15,
      },
      a: {
        textDecoration: 'underline',
        transition: '0.2s all ease-in',
        _hover: {
          backgroundColor: primary['900'],
          color: "white"
        }
      },
      ul: {
        marginLeft: 20,
        marginBottom: 15,
      },
      blockQuote: {
        fontStyle: 'italic',
        fontSize: 25,
        paddingLeft: 20,
        borderLeft: `1px solid ${primary['900']}`
      }
    },
  },
});

export default theme;
