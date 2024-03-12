"use client";

// import LogoLink from "@/app/utils/iwia-logo-link";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { BsArrow90DegLeft } from "react-icons/bs";
import Links from "./links";
import SidebarLinks from "./sidebar-links";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    router.push("/");
    toast.success("Logout Successful!");
  };

  return (
    <Box
      w={{ base: "94%", lg: "26rem"}}
      borderWidth={{ base: "0", lg: "1px" }}
      borderColor={"brand.450"}
      pb="3rem"
      px= "2rem"
      h="100vh"
      bg="brand.100"
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
        <Text>Logo</Text>
      </Flex>
      <Flex
        gap="1rem"
        direction="column"
        mt="4rem"
        fontSize={"1.7rem"}
        color="brand.970"
      >
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
        align="center"
        bg="brand.600"
        p="1.2rem"
        justify={"center"}
        color="red"
        shadow={"sm"}
        onClick={handleLogout}
        borderRadius={"1rem"}
        cursor={"pointer"}
        position="sticky"
        top="90%"
      >
        <Icon as={BsArrow90DegLeft} boxSize={6} mr=".5rem" />
        <Text fontWeight={"700"} fontSize={"1.45rem"}>
          LOG OUT
        </Text>
      </HStack>
    </Box>
  );
};

export default Sidebar;
