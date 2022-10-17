import React from "react";
import {
  Flex,
  Spacer,
  Heading,
  Button,
  HStack,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import { FaAlignJustify } from "@react-icons/all-files/fa/FaAlignJustify";

const Navigation = () => {
  const buttonIcon = useBreakpointValue({
    base: <FaAlignJustify size={24} />,
    md: <FaChevronDown />,
  });
  const navBreakpoint = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Flex
      w="full"
      alignItems="center"
      justify="center"
      gap="4"
      color="white"
      fontSize="md"
      fontWeight="semibold"
      lineHeight="6"
      mt="4"
    >
      <HStack alignItems="center" gap="16">
        <Heading
          as="h2"
          size="xl"
          color="red.600"
          textShadow="md"
          lineHeight="none"
        >
          NETFLIX
        </Heading>
        {navBreakpoint && (
          <ButtonGroup variant="link" spacing="2">
            <Button mx="4" my="2" colorScheme="white">
              Home
            </Button>
            <Button mx="4" my="2" colorScheme="white">
              My List
            </Button>
          </ButtonGroup>
        )}
      </HStack>
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="white"
          variant="link"
          size="md"
          rightIcon={buttonIcon}
        >
          {navBreakpoint ? "Email Address" : ""}
        </MenuButton>
        <MenuList bgColor="gray.500">
          {!navBreakpoint && (
            <>
              <MenuItem>Home</MenuItem>
              <MenuItem>My List</MenuItem>
            </>
          )}
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navigation;
