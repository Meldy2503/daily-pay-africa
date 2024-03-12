import {
  Box,
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { LinkProps } from "./links";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

interface NavProps extends LinkProps {
  subLink?: boolean;
  closeMobileSidebar?: () => void;
}

const SidebarLinks = ({
  path,
  label,
  icon: IconComponent,
  nestedLinks,
  closeMobileSidebar,
}: NavProps) => {
  const router = useRouter();
  const currentRoute = usePathname();

  const { isOpen, onToggle } = useDisclosure();

  const linkStyle = {
    transition: ".2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: ".6rem",
    paddingRight: "2rem",
    paddingTop: "1.2rem",
    paddingBottom: "1.2rem",
    cursor: "pointer",
  };
  return (
    <Stack spacing={4}>
      {path ? (
        //   without nested link
        <Link
          as={NextLink}
          href={path}
          _hover={{ textDecoration: "none" }}
          onClick={closeMobileSidebar}
        >
          <Box
            style={{ ...linkStyle }}
            pl="1rem"
            bg={
              currentRoute === path || currentRoute.includes(label)
                ? "brand.550"
                : "none"
            }
            color={
              currentRoute === path || currentRoute.includes(label)
                ? "brand.250"
                : "none"
            }
            _hover={{ background: "brand.550", color: "brand.250" }}
          >
            <Flex gap="1rem" justify="center" align="center">
              <Icon as={IconComponent} h="1.3rem" />
              <Text variant="label" fontWeight="semiBold">
                {label}
              </Text>
            </Flex>
          </Box>
        </Link>
      ) : (
        //   with nested link
        <Flex
          align={"center"}
          _hover={{ background: "brand.550", color: "brand.250" }}
          borderRadius=".6rem"
          cursor="pointer"
          gap="3rem"
          py="1.2rem"
          pl={"1rem"}
          onClick={nestedLinks && onToggle}
        >
          <Flex gap="1rem" align="center">
            <Icon as={IconComponent} h="1.5rem" />
            <Text variant="label" fontWeight="semiBold">
              {label}
            </Text>
          </Flex>
          {nestedLinks && (
            <Icon
              as={MdKeyboardArrowRight}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(90deg)" : ""}
              w={8}
              h={8}
            />
          )}
        </Flex>
      )}
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={"3rem"} align={"start"}>
          {nestedLinks?.map((link) => {
            return (
              <Link
                key={link.label}
                as={NextLink}
                href={link.path}
                _hover={{ textDecoration: "none" }}
                onClick={closeMobileSidebar}
              >
                <Box
                  borderRadius={".6rem"}
                  py="1.2rem"
                  w="18.5rem"
                  pl={"1rem"}
                  bg={
                    currentRoute === link?.path ||
                    currentRoute.includes(link?.label)
                      ? "brand.550"
                      : "none"
                  }
                  color={
                    currentRoute === link?.path ||
                    currentRoute.includes(link?.label)
                      ? "brand.250"
                      : "none"
                  }
                  _hover={{ background: "brand.550", color: "brand.250" }}
                >
                  <Flex gap="1rem" align="center">
                    <Text variant="label">{link.label}</Text>
                  </Flex>
                </Box>
              </Link>
            );
          })}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default SidebarLinks;
