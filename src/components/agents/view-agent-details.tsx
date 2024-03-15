import {
  Avatar,
  Box,
  Flex,
  Grid,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiPhoneCall } from "react-icons/fi";
import { MdKeyboardBackspace, MdOutlineEmail } from "react-icons/md";
import CreditCard from "../cards/credit-card";
import { AppTag } from "../tags";
import AssignAccountModal from "./assign-account-modal";

const ViewAgentDetails = () => {
  const router = useRouter();
  const agentsData = [
    {
      title: "Title",
      value: "Mr.",
    },
    {
      title: "First name",
      value: "Mike",
    },
    {
      title: "Last name",
      value: "Edward",
    },
    {
      title: "Gender",
      value: "Male",
    },
    {
      title: "Email address",
      value: "mike@gmail.com",
    },
    {
      title: "No. of customers",
      value: "600",
    },
    {
      title: "Status",
      value: "Active",
    },
  ];

  return (
    <Box
      mb="3rem"
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
        <Heading fontSize={"1.6rem"} fontWeight={600}>
          Agent Information
        </Heading>
      </HStack>
      <Flex
        borderWidth="1.5px"
        borderColor={"typography.lightGray"}
        borderRadius="1rem"
        p="2rem"
        rowGap="5rem"
        columnGap="3rem"
        flexWrap={"wrap"}
        justify={"space-between"}
      >
        <Box>
          <Flex gap="2rem">
            <Avatar name="Mike Edward" src="" size="xl" />

            <Box>
              <Heading>Mike Edward</Heading>
              <Flex
                columnGap="4rem"
                rowGap={"1rem"}
                flexWrap={"wrap"}
                mt="1rem"
                fontSize={"1.4rem"}
              >
                <Flex gap="1rem" align={"center"}>
                  <MdOutlineEmail fontSize="2rem" />
                  <Text>mike@gmail.com</Text>
                </Flex>
                <Flex gap="1rem" align={"center"}>
                  <FiPhoneCall fontSize="1.7rem" />
                  <Text>08036544976</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
          <Box mt="3rem">
            <AssignAccountModal />
          </Box>
        </Box>
        <CreditCard
          bankName="First Bank"
          accountNo="3992631135"
          accountName="Mark Edward"
        />
      </Flex>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap="3rem"
        mt="3rem"
      >
        {" "}
        {agentsData?.map((items, index) => {
          return (
            <Flex
              key={index}
              flexDirection={{ base: "column", sm: "row" }}
              rowGap={".5rem"}
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
  );
};

export default ViewAgentDetails;
