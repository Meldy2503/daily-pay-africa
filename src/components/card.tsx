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
}

const Card = ({ icon, title, value, map, w, subTitle }: CardProps) => {
  return (
    <Box
      bg={"brand.100"}
      borderRadius={"1rem"}
      p={"2rem 2rem 0rem 2rem"}
      w={w ?? {base: "100%", md: "47%", lg: '32%' }}
      borderWidth={{ base: "0", lg: "1px" }}
      borderColor={"brand.450"}
      shadow={'sm'}
    >
      <Flex gap={{base: '2rem', sm: '3rem'}} mb='2rem' color='brand.500' align={'flex-start'}>
      <Image src={icon} alt='map icon' width={50}  height={50}/>
      <Box>

        <Text >
          {title}
        </Text>
      <Text fontWeight={800} fontSize={'3rem'} color='brand.150'>{value}</Text>
        <Text fontSize={'1.3rem'}>
          {subTitle}
        </Text>
      </Box>
      </Flex>
      <Image src={map} alt='map icon'  width={800}  height={100}/>
    </Box>
  );
};

export default Card;
