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
} from "@chakra-ui/react";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";

const Navigation = () => {
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
      pt="4"
    >
      <HStack alignItems="center" gap="16">
        <Heading as="h2" size="xl" color="red.600" textShadow="md">
          NETFLIX
        </Heading>
        <ButtonGroup variant="link" spacing="2">
          <Button mx="4" my="2" colorScheme="white">
            Home
          </Button>
          <Button mx="4" my="2" colorScheme="white">
            My List
          </Button>
        </ButtonGroup>
      </HStack>
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="white"
          variant="link"
          size="md"
          rightIcon={<FaChevronDown />}
        >
          Email Address
        </MenuButton>
        <MenuList bgColor="gray.500">
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navigation;
