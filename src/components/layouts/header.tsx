"use client";


import {
  Avatar,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaAngleDown } from "react-icons/fa";

export const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    router.push("/");
    toast.success("Logout Successful!");
  };

  const style = { width: "100%", padding: " .7rem 2rem" };

  return (
    <Menu >
      <MenuButton>
        <HStack spacing={8}>
          <Avatar src="" name="Admin" size={"md"} />
          <Icon as={FaAngleDown} boxSize={6} />
        </HStack>
      </MenuButton>
      <MenuList
        shadow="lg"
        fontSize={"1.6rem"}
        w="32rem"
      >
        <VStack py="2rem" borderBottom="2px solid #e5e5e5">
          <Avatar src="" name="Admin" size={"2xl"} />
          <Heading mt=".5rem" fontWeight="700">
            Admin
          </Heading>
          <Text fontSize="1.5rem">admin@iwia.com</Text>
        </VStack>

        <MenuItem borderBottom="2px solid #f1f1f5" fontWeight={"500"}>
          <Link href="/pages/auth/change-password" style={style}>
            Change Password
          </Link>
        </MenuItem>

        <MenuItem
          onClick={handleLogout}
          fontSize={"1.7rem"}
          fontWeight={"500"}
          py="1rem"
          color="brand.150"
        >
          <Flex align={"center"} justify={"center"} mx="auto">
            Sign out
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};