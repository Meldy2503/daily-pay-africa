import { Box, Flex, Grid, HStack, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MdKeyboardBackspace } from "react-icons/md";
import { AppTag } from "../../tags";
import { usersAdminData, usersBasicData } from "./constants";

const ViewUserDetails = () => {
  const router = useRouter();

  return (
    <Box
      flexWrap={"wrap"}
      bg="typography.white"
      borderWidth="1.5px"
      borderColor={"typography.mediumWhite"}
      shadow={"sm"}
      borderRadius="1rem"
      p=" 4rem 2rem"
    >
      <HStack
        mb="4rem"
        spacing={"4rem"}
        cursor="pointer"
        onClick={() => router.back()}
      >
        <MdKeyboardBackspace fontSize={"3rem"} />
        <Heading fontSize={"1.6rem"} fontWeight={"bold"}>
          User Information
        </Heading>
      </HStack>
      <Box px="1rem">
        <Heading fontSize={"1.6rem"} fontWeight={"bold"}>
          Basic
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="3rem"
          mt="3rem"
        >
          {usersBasicData?.map((items, index) => {
            return (
              <Flex
                key={index}
                flexDirection={{ base: "column", sm: "row" }}
                rowGap={".5rem"}
              >
                <Text color="typography.gray" w="18rem">
                  {items.title}:
                </Text>
                <Text w="fit-content">{items.value}</Text>
              </Flex>
            );
          })}
        </Grid>
      </Box>
      <Box px="1rem" py="3rem">
        <Heading fontSize={"1.6rem"} fontWeight={"bold"} mt="5rem">
          Administrative
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="3rem"
          mt="3rem"
        >
          {usersAdminData?.map((items, index) => {
            return (
              <Flex
                key={index}
                flexDirection={{ base: "column", sm: "row" }}
                rowGap={"1rem"}
              >
                <Text color="typography.gray" w="18rem">
                  {items.title}:
                </Text>
                {items.title === "Status" ? (
                  <AppTag label={items.value} />
                ) : (
                  <Text w="fit-content">{items.value}</Text>
                )}{" "}
              </Flex>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ViewUserDetails;
