"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import { GetCustomerColumns } from "./table-column";
import { customStyles } from "@/utils/custom-table-styles";
import SearchBar from "../search-input";
import { Button } from "../button";
import CreateCustomerModal from "./create-customer-modal";

const CustomerTable = () => {
  let data = [
    {
      date: "25-5-2021",
      status: "Active",
      name: "John Doe",
      agent: "Mike Udoh",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Inactive",
      name: "John Doe",
      agent: "Mike Udoh",

      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Pending",
      name: "John Mark",
      agent: "Mike Udoh",

      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Active",
      name: "John Doe",
      agent: "Mike Udoh",

      phone: "08012345678",
    },
  ];

  const columns = GetCustomerColumns();

  return (
    <Box
      bg="typography.white"
      borderRadius="1rem"
      mt="5rem"
      mb="3rem"
      borderWidth="1.5px"
      borderColor={"typography.mediumWhite"}
      shadow={"sm"}
      p="3rem 2rem 4rem 2rem"
    >
     

      <Text fontWeight={"600"} mb="4rem" mt='1rem'>
      Customers
      </Text>
      <Flex
        justify={"space-between"}
        pb="4rem"
        gap="3rem"
        align={{ base: "flex-start", sm: "center" }}
      >
        <SearchBar />
        <CreateCustomerModal />
      </Flex>
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

export default CustomerTable;
