import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Darker Grotesque",
    heading: "Bree Serif"
  },

  styles: {
    global: {
      body: {
        bg: "gray.100",
        fontSize: "xl",
        fontWeight: "medium"
      },
    },
  },
});

export default theme;
