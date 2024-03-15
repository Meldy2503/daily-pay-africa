"use client";

import {
  Avatar,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack
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

  return (
    <Menu>
      <MenuButton>
        <HStack spacing={8}>
          <Avatar src="" name="Admin" size={"md"} />
          <Icon as={FaAngleDown} boxSize={6} />
        </HStack>
      </MenuButton>
      <MenuList shadow="lg" fontSize={"1.6rem"} w="30rem">
        <VStack py="2rem" borderBottom="2px solid #e5e5e5">
          <Avatar src="" name="Admin" size={"lg"} />

          <Text fontSize="1.5rem">admin@iwia.com</Text>
        </VStack>

        <MenuItem borderBottom="2px solid #f1f1f5">
          <Flex align={"center"} justify={"center"} mx="auto" py="1rem">
            <Link href="/auth/change-password">Change Password</Link>
          </Flex>
        </MenuItem>

        <MenuItem onClick={handleLogout} py="1rem">
          <Flex
            align={"center"}
            justify={"center"}
            mx="auto"
            color="typography.green"
          >
            Sign out
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
