"use client";

// import LogoLink from "@/app/utils/iwia-logo-link";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BsArrow90DegLeft } from "react-icons/bs";
import Links from "./links";
import SidebarLinks from "../sidebar";

const Sidebar = () => {
  const currentRoute = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    router.push("/");
    toast.success("Logout Successful!");
  };



  return (
    <Box
      w={{ base: "94%", lg: "26rem", xl: "30rem" }}
      borderWidth={{ base: "0", lg: "1px" }}
      borderColor={"brand.420"}
      pb="3rem"
      px={{ base: "2rem", xl: "3rem" }}
      h="100vh"
      bg="brand.350"
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
        {/* <LogoLink width="11rem" /> */}
        <Text>Logo</Text>
      </Flex>
      <Flex
        gap="1rem"
        direction="column"
        mt="4rem"
        fontSize={"1.7rem"}
        color="brand.970"
      >
        {/* {Links.map((item, index) => {
          return (
            <Link href={item.href} key={index}>
              <HStack
                align="center"
                p="1rem"
                borderRadius={"1rem"}
                _hover={{ color: "brand.150", bg: "brand.450" }}
                fontWeight={"500"}
                bg={
                  currentRoute === item.href ||
                  currentRoute.includes(item.hrefText)
                    ? "brand.450"
                    : "none"
                }
                color={
                  currentRoute === item.href ||
                  currentRoute.includes(item.hrefText)
                    ? "brand.150"
                    : "default"
                }
              >
                <Icon
                  as={item.icon}
                  boxSize={item.size}
                  mr=".5rem"
                  ml={item.ml}
                />
                <Text fontWeight={"500"}>{item.text}</Text>
              </HStack>
            </Link>
          );
        })} */}
          {Links.map(item => (
          <SidebarLinks
            label={item.label}
            key={item.label}
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
        borderRadius={"1rem"}
        onClick={handleLogout}
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
