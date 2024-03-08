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
    },
  },
  fonts: {
    body: poppins.style.fontFamily,
    heading: poppins.style.fontFamily,
  },
});

export default theme;
