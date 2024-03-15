import React from "react";
import { Box, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CardProps {
  icon?: any;
  title?: string;
  subTitle?: string;
  value?: number;
  map?: any;
  w?: any;
  pd?: any;
  gap?: any;
}

const SummaryCard = ({ icon, title, value, map, w,pd, gap, subTitle }: CardProps) => {
  return (
    <Box
    borderColor={"typography.mediumWhite"}
      bg={"typography.white"}
      borderRadius={"1rem"}
      p={pd ?? "2rem 2rem 0rem 2rem"}
      w={w ?? { base: "100%", md: "46%", xl: "32%" }}
      borderWidth= "1.5px" 
      shadow={"sm"}
    >
      <Flex
        gap={ gap ?? { base: "2rem", md: "3rem" }}
        mb="2rem"
        color={"typography.gray"}
        align={map ? "flex-start" : 'center'}
      >
        <Image src={icon} alt="map icon" width={50} height={50} />
        <Flex direction='column' gap={map ? '0' : '.5rem'} >
          <Text>{title}</Text>
          <Text fontWeight={800} fontSize={"3rem"}      color={"typography.black"}
>
            {value}
          </Text>
          <Text fontSize={"1.3rem"}>{subTitle}</Text>
        </Flex>
      </Flex>
      {map && <Image src={map} alt="map icon" width={800} height={100} />}{" "}
    </Box>
  );
};

export default SummaryCard;
