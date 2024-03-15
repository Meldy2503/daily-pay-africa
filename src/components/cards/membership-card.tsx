import { Box, Flex, HStack, Text, useMediaQuery } from "@chakra-ui/react";

interface CardProps {
  name?: string;
  memberNo?: string | number;
  agent?: string;
}

const MembershipCard = ({ name, memberNo, agent }: CardProps) => {
  const [isMobile] = useMediaQuery("(max-width: 360px)");

  return (
    <Box
      borderColor={"typography.offWhite"}
      bg={"typography.offWhite"}
      borderRadius={"1rem"}
      p={"2rem"}
      width={{ base: "100%", sm: "30rem" }}
      borderWidth="1.5px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
      position={"relative"}
    >
      <Box
        h="4.3rem"
        w="100%"
        position={"absolute"}
        top={"0"}
        left={"0"}
        borderTopEndRadius={".8rem"}
        borderTopStartRadius={".8rem"}
        style={{
          background:
            "linear-gradient(60deg, rgb(4, 17, 3, 1) 0%, rgb(41, 210, 41, 1) 100%)",
        }}
      >
        <Text textAlign={"center"} color="white" py="1rem">
          MEMBERSHIP CARD
        </Text>
      </Box>

      <Flex direction="column" mt="5rem" align="center" justify={"center"}>
        <Text
          color={"typography.green"}
          fontWeight={"bold"}
          fontSize={isMobile ? "1.8rem" : "2rem"}
          mb="1rem"
          letterSpacing={".1rem"}
          textAlign={"center"}
        >
          {name}
        </Text>

        <HStack>
          <Text fontSize={"1.5rem"}>{isMobile ? "Id:" : " Member Id:"}</Text>
          <Text fontWeight={"bold"}>{memberNo}</Text>
        </HStack>
        <HStack>
          <Text fontSize={"1.5rem"}>
            {isMobile ? "Agent:" : " Assigned agent:"}
          </Text>
          <Text fontWeight={"bold"}>{agent}</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default MembershipCard;
