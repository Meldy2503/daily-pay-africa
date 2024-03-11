import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import { MdAdd } from "react-icons/md";

interface ButtonProps {
  children: React.ReactNode;
  bg?: string;
  color?: string;
  w?: any;
  onClick?: () => void;
  as?: any;
  href?: string;
  border?: string;
  px?: any;
  py?: string;
  fontSize?: string;
  borderRadius?: string;
  type?: string;
  bounce?: boolean;
  textAlign?: any;
  mt?: any;
  mb?: any;
  loading?: any;
}

export const Button = ({
  children,
  bg,
  color,
  w,
  onClick,
  as,
  href,
  border,
  px,
  py,
  fontSize,
  textAlign,
  borderRadius,
  mt,
  loading,
  mb,
}: ButtonProps) => {
  return (
    <Box
      className='btn'
      w={w ?? "fit-content"}
      onClick={onClick}
      as={as}
      href={href}
      border={border ?? "none"}
      px={px ?? "2rem"}
      py={py ?? "1.2rem"}
      fontFamily={"inherit"}
       loading={loading}
      borderRadius={ borderRadius ?? "3rem"}
      cursor={"pointer"}
      fontSize={fontSize ?? "1.6rem"}
      fontWeight={"500"}
      _active={{ transform: "translateY(1px)" }}
      mt={mt}
      mb={mb}
      textAlign={textAlign ?? "center"}
      transition='all 0.3s ease'

      
    >
      {loading ? <Spinner /> : children}
      
    </Box>
  );
};





