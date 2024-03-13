"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import { getDashboardColumns } from "./table-column";
import { customStyles } from "@/utils/custom-table-styles";
import SearchBar from "../search-input";
import { Button } from "../button";
import DashboardModal from "./add-modal";

const DashboardTable = () => {
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

  const columns = getDashboardColumns();

  return (
    <Box
      bg="typography.white"
      borderRadius="1rem"
      my="3rem"
      borderWidth={{ base: "0", lg: "1.5px" }}
      borderColor={"typography.mediumWhite"}
      shadow={"sm"}
      p="3rem 2rem 4rem 2rem"
    >
      <Flex
        justify={"space-between"}
        pb="3rem"
        gap="3rem"
        align={{ base: "flex-start", sm: "center" }}
        flexWrap={"wrap"}
        direction={{ base: "column", sm: "row" }}
      >
        <Text fontWeight={"600"}>Accounts</Text>
        <Flex gap="2rem" direction={{ base: "column", sm: "row" }}>
          <SearchBar />
        
          <DashboardModal/>
        </Flex>
      </Flex>
      <Box
        borderWidth={{ base: "0", lg: "1.5px" }}
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

export default DashboardTable;
