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


interface Props {
  onClose?: any;
}
const Sidebar = ({onClose}: Props) => {
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
      pb="3rem"
      px="2rem"
      h="100vh"
      position={"fixed"}
      left="0px"
      bottom="0px"
    >
   
      <Box zIndex={100} my='2rem'>

        <Image src={LogoIcon} height={100} width={120} alt="daily pay logo" />
      </Box>
      <Flex gap="1rem" direction="column" mt="4rem" fontSize={"1.7rem"}>
        {Links.map((item) => (
          <SidebarLinks
            key={item.label}
            label={item.label}
            path={item.path}
            icon={item.icon}
            nestedLinks={item.nestedLinks}
            onClose={onClose}
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
