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
      100: "#ffffff",
      150: "#000000",
      200: "#072A36",
      250: "#05740c",
      300: "#0aa515",
      350: "#10dc6c",
      400: "#fbfbfb",
      450: "#f3f2f2",
      500: "#8D8D8D",
      550: "#DFF3D9",
    },
  },
  fonts: {
    body: poppins.style.fontFamily,
    heading: poppins.style.fontFamily,
  },
});

export default theme;
