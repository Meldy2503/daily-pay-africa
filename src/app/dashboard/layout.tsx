"use client";

import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { Header } from "../../components/layouts/header";
import Sidebar from "../../components/layouts/sidebar";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
interface LayoutProps {
  children?: React.ReactNode;
}

const MenuDrawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent>
        <Flex justify={"flex-end"} p="1rem">
          <Icon
            as={AiOutlineClose}
            boxSize={6}
            onClick={onClose}
            zIndex={"100"}
          />
        </Flex>
        <DrawerBody p="0">
          <Sidebar onClose={onClose} mt="10rem"/>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" pr={{ base: "unset" }}>
      <Box display={{ base: "none", lg: "flex" }}>
        <Sidebar mt='2rem'/>
      </Box>
      <Flex
        bg="typography.offWhite"
        direction="column"
        rowGap={"2rem"}
        flexDir="column"
        position={"absolute"}
        right="0"
        left={{ base: "0", lg: "25rem" }}
        minH="100vh"
      >
        <Flex
          justify={{ base: "space-between", lg: "flex-end" }}
          align={"center"}
          position={"sticky"}
          top="0px"
          zIndex={"100"}
          bg="typography.white"
          py="1.5rem"
          px={{ base: "1rem", lg: "2rem" }}
          borderWidth={{ base: "0", lg: "1px" }}
          borderColor={"typography.mediumWhite"}
        >
          <Box display={{ base: "block", lg: "none" }}>
            <IconButton
              aria-label="Menu"
              icon={<MdMenu />}
              onClick={onOpen}
              fontSize={"2.5rem"}
              variant={"ghost"}
            />
          </Box>
          <Header />
        </Flex>
        <Box px={{ base: "1rem", lg: "2rem" }}>{children}</Box>
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Layout;
