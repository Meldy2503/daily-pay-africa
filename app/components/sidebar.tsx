import {
  Box,
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { LinkProps } from './layouts/links';
import { FaAngleDoubleRight } from "react-icons/fa";



interface NavProps extends LinkProps {
  subLink?: boolean;
  closeMobileSidebar?: () => void;
}

const SidebarLinks = ({
  path,
  label,
  icon: IconComponent,
  nestedLinks,
  closeMobileSidebar
}: NavProps) => {
  const router = useRouter();
  const isActive = router.pathname === path;
  const { isOpen, onToggle } = useDisclosure();

  const linkStyle = {
    transition: '.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '.6rem',
    paddingRight: '2rem',
    paddingTop: '1.2rem',
    paddingBottom: '1.2rem',
    cursor: 'pointer'
  };
  return (
    <Stack
      spacing={4}
      px="1rem"
    //   fontSize={theme.fontSizes.paragraph}
    //   fontWeight={themes.fontWeights.medium}
    >
      {path ? (
        //   without nested link
        <Link
          as={NextLink}
          href={path}
          _hover={{ textDecoration: 'none' }}
          onClick={closeMobileSidebar}
        >
          <Box
            style={{ ...linkStyle }}
            role="group"
            pl="2rem"
            background={path && isActive ? 'bg.secondary' : 'unset'}
            _hover={{ background: 'bg.secondary' }}
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
        <Box
          role="group"
          style={{ ...linkStyle }}
          pl={'2rem'}
          onClick={nestedLinks && onToggle}
          background={path && isActive ? 'bg.secondary' : 'unset'}
          _hover={{ background: 'bg.secondary' }}
        >
          <Flex gap="1rem" align="center">
            <Icon as={IconComponent} h="1.3rem" />
            <Text variant="label" fontWeight="semiBold">
              {label}
            </Text>
          </Flex>
          {nestedLinks && (
            <Icon
              as={FaAngleDoubleRight}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(90deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Box>
      )}
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={'2rem'}
          borderLeft={'1px solid'}
          borderColor={'gray.200'}
          align={'start'}
        >
          {nestedLinks?.map(link => {
            const isActive = router.pathname === link.path;
            return (
              <Link
                key={link.label}
                as={NextLink}
                href={link.path}
                _hover={{ textDecoration: 'none' }}
                onClick={closeMobileSidebar}
              >
                <Box
                  role="group"
                  style={{ ...linkStyle }}
                  pl={'1rem'}
                  background={link.path && isActive ? 'bg.secondary' : 'unset'}
                  _hover={{ background: 'bg.secondary' }}
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
