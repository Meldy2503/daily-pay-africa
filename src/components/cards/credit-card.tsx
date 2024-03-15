"use client";

import { Box, Flex, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import { FcSimCardChip } from "react-icons/fc";
import pattern from "../../assets/images/card-pattern.svg";

interface CreditCardProps {
  bankName?: string;
  accountNo?: string;
  accountName?: string;
}

const CreditCard = ({ bankName, accountNo, accountName }: CreditCardProps) => {
  const [isMobile] = useMediaQuery("(max-width: 360px)");

  return (
    <Box
      bgImage={`url(${pattern.src})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width={{ base: "100%", sm: "30rem" }}
      height="18.5rem"
      borderRadius={"1.4rem"}
      position={"relative"}
    >
      <Box
        p={"1.5rem"}
        bg={"typography.transGreen"}
        borderRadius={"1rem"}
        w="100%"
        h="100%"
        color="typography.white"
        position={"absolute"}
        top="0"
        left={"0"}
        bottom={"0"}
      >
        <Box>
          <HStack justify={"space-between"}>
            <FcSimCardChip fontSize={"5rem"} />
            <Text fontSize={"1.8rem"} fontWeight={"bold"}>
              Account card
            </Text>
          </HStack>
          <Flex direction="column" mt="2rem">
            <HStack>
              <Text display={isMobile ? "none" : "block"}>Bank name:</Text>
              <Text fontWeight={500}>
                {bankName}
              </Text>
            </HStack>
            <HStack>
              <Text display={isMobile ? "none" : "block"}>Account no:</Text>
              <Text letterSpacing=".2rem" fontWeight={600} fontSize={"2rem"}>
                {accountNo}
              </Text>
            </HStack>
            <HStack>
              <Text display={isMobile ? "none" : "block"}>Account name:</Text>
              <Text fontWeight={500}>
                {accountName}
              </Text>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CreditCard;
