"use client";

import { Box, Flex, Modal, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import { GetUserColumns } from "./table-column";
import { customStyles } from "@/utils/custom-table-styles";
import SearchBar from "../search-input";
import { Button } from "../button";
import CreateUserModal from "./create-user-modal";
import EditUserModal from "./edit-user-modal";

const UsersTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let data = [
    {
      date: "25-5-2021",
      status: "Active",
      name: "John Doe",
      email: 'john@gmail.com',
      role: "manager",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Inactive",
      name: "John Doe",
      email: 'john@gmail.com',
      role: "staff",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Pending",
      name: "John Mark",
      email: 'john@gmail.com',
      role: "manager",
      phone: "08012345678",
    },
    {
      date: "25-5-2021",
      status: "Active",
      name: "John Doe",
      email: 'john@gmail.com',
      role: "manager",
      phone: "08012345678",
    },
  ];

  const columns = GetUserColumns({
    onOpen,
  });

  return (
    <Box
      bg="typography.white"
      borderRadius="1rem"
      borderWidth="1.5px"
      borderColor={"typography.mediumWhite"}
      shadow={"sm"}
      p="3rem 2rem 4rem 2rem"
    >
   

      <Text fontWeight={"600"} mb="4rem" mt='1rem'>
      Users
      </Text>
      <Flex
        justify={"space-between"}
        pb="4rem"
        gap="3rem"
        align={{ base: "flex-start", sm: "center" }}
      >
        <SearchBar />
        <CreateUserModal />
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"6xl"}>
      <ModalOverlay />
      <EditUserModal  onClose={onClose}/>

      </Modal>

    </Box>
  );
};

export default UsersTable;
