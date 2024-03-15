"use client";

import { customStyles } from "@/utils/custom-table-styles";
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import SearchBar from "../../search-input";
import CreateAgentModal from "../create-agent-modal";
import { GetAgentColumns } from "./table-column";

const AgentTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let data = [
    {
      date: "25-5-2021",
      status: "Active",
      name: "John Doe",
      amount: 50,
      age: "14 years",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Inactive",
      name: "John Doe",
      amount: 30,
      age: "14 years",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Pending",
      name: "John Mark",
      amount: 200,
      age: "14 years",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Active",
      name: "John Doe",
      amount: 145,
      age: "14 years",
      phone: "08012345678",
    },
  ];

  const columns = GetAgentColumns();

  return (
    <Box
      bg="typography.white"
      borderRadius="1rem"
      my="3rem"
      borderWidth="1.5px"
      borderColor={"typography.mediumWhite"}
      shadow={"sm"}
      p="2rem 2rem 4rem 2rem"
    >
      <Text fontWeight={"600"} mb="4rem" mt='1rem'>
        Agents
      </Text>
      <Flex
        justify={"space-between"}
        pb="4rem"
        rowGap="2rem"
        columnGap={'5rem'}
        align={{ base: "flex-start", md: "center" }}
        flexWrap={'wrap'}
      >
        <SearchBar />
        <CreateAgentModal />
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

export default AgentTable;
