"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { PiArrowSquareOutBold } from "react-icons/pi";
import Sidebar from "./sidebar";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Header } from "./header";
import { configOptions } from "../../services/config";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
interface SidebarProps {
  children?: React.ReactNode;
}

const MenuDrawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent bg="brand.350">
        <Flex justify={"flex-end"} p="1rem">
          <Icon
            as={AiOutlineClose}
            boxSize={6}
            onClick={onClose}
            zIndex={"100"}
          />
        </Flex>
        <DrawerBody p="0">
          <Sidebar />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const ProtectedLayout = ({ children }: SidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const path = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const token = configOptions();
  const router = useRouter();



  useEffect(() => {
    if (!token && typeof window !== 'undefined') {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [token, router]);

  if (isLoading) {
    return <Text height="100vh" >Loading</Text> // show a loading component if you try to access a page without token
  }



  return (
    <Flex minH="100vh" padding={"0rem"} pr={{ base: "unset" }}>
      <Box display={{ base: "none", lg: "flex" }}>
        <Sidebar />
      </Box>
      <Flex
        bg="brand.600"
        px={{ base: "1rem", sm: "2rem", md: "3rem" }}
        direction="column"
        rowGap={"2rem"}
        flexDir="column"
        position={"absolute"}
        right="0"
        left={{ base: "0", lg: "26rem", xl: "30rem" }}
        minH="100vh"
      >
        <Flex
          justify={{ base: "space-between", lg: "flex-end" }}
          align={"center"}
          position={"sticky"}
          top="0px"
          zIndex={"100"}
          bg="brand.600"
          py="2rem"
        >
          <Box display={{ base: "block", lg: "none" }}>
            <IconButton
              aria-label="Menu"
              icon={<MdMenu />}
              onClick={onOpen}
              fontSize={"3rem"}
              variant={"ghost"}
            />
          </Box>

          <Box mr={{ base: "2rem", sm: "2rem" }}>
            <Flex align={"center"} gap={"1.5rem"}>
              {!path.includes("post") && (
                <Link href="/pages/jobs/post-job">
                  <HStack
                    align="center"
                    borderColor="brand.300"
                    borderBottomWidth={"2px"}
                    gap=".5rem"
                  >
                    <Text fontWeight={"700"} fontSize="1.6rem">
                      Post a Job
                    </Text>
                    <Icon as={PiArrowSquareOutBold} boxSize={9} mr=".5rem" />
                  </HStack>
                </Link>
              )}
              <Header />
            </Flex>
          </Box>
        </Flex>
        <Box>{children}</Box>
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default ProtectedLayout;
