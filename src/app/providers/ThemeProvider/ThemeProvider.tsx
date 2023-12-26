import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { color } from "framer-motion";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#FAF1E1",
      100: "#ECD7BB",
      200: "#D3C4AF",
      300: "#A29A89",
      400: "#574A44",
      500: "#FFB85A",
      600: "#FFD39A",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
