import { extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const theme = extendTheme({
  colors: {
    brand: {
      500: "#05740c",
    },
    typography: {
      black: "#000000",
      gray: "#8D8D8D",
      white: "#ffffff",
      offWhite: "#f8f8f8",
      mediumWhite: "#f3f2f2",
      darkGreen: "#072A36",
      green: "#05740c",
      lightGreen: "#0aa515",
      mediumGreen: "#10dc6c",
      lighterGreen: "#DFF3D9",
      red: "#aa1e38",
      lightRed: "#F5C9C9",
    },
  },
  fonts: {
    body: poppins.style.fontFamily,
    heading: poppins.style.fontFamily,
  },
});

export default theme;
