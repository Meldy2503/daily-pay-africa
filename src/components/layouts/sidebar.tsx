"use client";

import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { BsArrow90DegLeft } from "react-icons/bs";
import Links from "./links";
import SidebarLinks from "./sidebar-links";
import { useRouter } from "next/navigation";
import LogoIcon from "../../assets/images/logo-icon.svg";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    router.push("/");
    toast.success("Logout Successful!");
  };

  return (
    <Box
      w={{ base: "94%", lg: "25rem" }}
      bg="typography.white"
      borderWidth={{ base: "0", lg: "1.5px" }}
      borderColor={"typography.mediumWhite"}
      shadow="md"
      pb="3rem"
      px="2rem"
      h="100vh"
      position={"fixed"}
      left="0px"
      bottom="0px"
    >
      <Flex
        position={"sticky"}
        top="10px"
        w="100%"
        zIndex={"100"}
        mt="1.5rem"
        ml="1rem"
      >
        <Image src={LogoIcon} height={100} width={100} alt="daily pay logo" />
      </Flex>
      <Flex gap="1rem" direction="column" mt="4rem" fontSize={"1.7rem"}>
        {Links.map((item) => (
          <SidebarLinks
            key={item.label}
            label={item.label}
            path={item.path}
            icon={item.icon}
            nestedLinks={item.nestedLinks}
          />
        ))}
      </Flex>

      <HStack
        onClick={handleLogout}
        cursor={"pointer"}
        bg="typography.lighterGreen"
        color="typography.darkGreen"
        borderRadius={".5rem"}
        py="1.1rem"
        px="2rem"
        position="sticky"
        top="90%"
        justify={"center"}
        align="center"
      >
        <Icon as={BsArrow90DegLeft} boxSize={6} mr="1rem" />
        <Text fontSize={"1.6rem"}>Sign out</Text>
      </HStack>
    </Box>
  );
};

export default Sidebar;
