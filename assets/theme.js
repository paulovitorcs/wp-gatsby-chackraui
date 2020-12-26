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
    },
  },
});

export default theme;
