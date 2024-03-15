"use client";

import { customStyles } from "@/utils/custom-table-styles";
import { Box, Flex, Text } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import SearchBar from "../../search-input";
import CreateAgentModal from "../create-agent-modal";
import { GetAssignedCustomersColumns } from "./table-column";

const ViewCustomersTable = () => {
  let data = [
    {
      date: "25-5-2021",
      status: "Active",
      name: "John Doe",
      amount: 5000,
      age: "14 years",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Inactive",
      name: "John Doe",
      amount: 5000,
      age: "14 years",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Pending",
      name: "John Mark",
      amount: 5000,
      age: "14 years",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Active",
      name: "John Doe",
      amount: 5000,
      age: "14 years",
      phone: "08012345678",
    },
  ];

  const columns = GetAssignedCustomersColumns();

  return (
    <Box
      bg="typography.white"
      borderRadius="1rem"
      mb="3rem"
      borderWidth="1.5px"
      borderColor={"typography.mediumWhite"}
      shadow={"sm"}
      p="2rem 2rem 4rem 2rem"
    >
      {/* <Flex
        justify={"space-between"}
        pb="3rem"
        gap="3rem"
        align={{ base: "flex-start", sm: "center" }}
        flexWrap={"wrap"}
        direction={{ base: "column", sm: "row" }}
      > */}
      {/* <Flex gap="2rem" direction={{ base: "column", sm: "row" }}> */}
      {/* <Box pb="5rem">
        <SearchBar />
      </Box> */}
      <Text fontWeight={"600"} mb="4rem" mt="1rem">
        Assigned Customers
      </Text>

      {/* <Flex
        justify={"space-between"}
        pt="0rem"
        pb="5rem"
        gap="3rem"
        align={{ base: "flex-start", sm: "center" }}
        flexWrap={"wrap"}
        direction={{ base: "column", sm: "row" }}
      > */}
      <Box mb="3rem">
        <SearchBar />
        {/* <CreateAgentModal /> */}
      </Box>
      {/* </Flex> */}
      {/* <CreateAgentModal /> */}
      {/* </Flex> */}
      {/* </Flex> */}
      <Box
        borderWidth="1.5px"
        borderColor={"typography.mediumWhite"}
        shadow={"sm"}
        bg="typography.white"
        borderRadius="1rem"
      >
        <DataTable data={data} columns={columns} customStyles={customStyles} />
      </Box>
    </Box>
  );
};

export default ViewCustomersTable;
