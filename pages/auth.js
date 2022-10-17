import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  basicBoxStyles,
  ContainerQuery,
  VStackQuery,
  InputQuery,
  ButtonQuery,
} from "/styles/MediaQuery/auth.module.js";

const Auth = () => {
  return (
    <Box
      sx={basicBoxStyles}
      w="full"
      h="100vh"
      display="flex"
      alignItems="start"
      justifyContent="center"
      shadow="base"
    >
      <Container
        maxW={ContainerQuery.maxW}
        gap={ContainerQuery.gap}
        bgColor={ContainerQuery.bgColor}
        h="full"
        display="flex"
        alignItems="center"
        flexDir="column"
        pt="4"
      >
        <Heading as="h2" w="full" size="xl" color="red.600">
          NETFLIX
        </Heading>
        <VStack
          w={VStackQuery.w}
          bgColor={VStackQuery.bgColor}
          spacing={VStackQuery.spacing}
          px={VStackQuery.px}
          borderRadius="6px"
          alignItems="start"
          pt="10"
          pb="24"
        >
          <Heading as="h2" size="xl" color="white">
            Sign In
          </Heading>
          <Input
            size={InputQuery.size}
            placeholder="Email Address"
            variant="outline"
            bgColor="gray.800"
            color="whiteAlpha.900"
            borderColor="whiteAlpha.900"
            focusBorderColor="whiteAlpha.900"
          />
          <Button size={ButtonQuery.size} w="full" colorScheme="red">
            Sign In
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Auth;
