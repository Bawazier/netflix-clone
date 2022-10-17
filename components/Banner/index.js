/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { VStack, HStack, Heading, Button, Text } from "@chakra-ui/react";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";

const Banner = () => {
  return (
    <VStack w={{ base: "full", sm: "md", md: "lg" }} align="start" gap="2">
      <HStack spacing="0">
        <Heading as="h2" size="xl" color="red.600" textShadow="md">
          N
        </Heading>
        <Text fontSize="sm" fontWeight="semibold" color="gray.400">
          SERIES
        </Text>
      </HStack>
      <Heading
        as="h2"
        size="2xl"
        lineHeight="95%"
        letterSpacing="6.5%"
        color="white"
        fontFamily="roboto"
        textShadow="4px 1px #C53030"
      >
        SPIDER-MAN No Way Home
      </Heading>
      <Heading
        as="h5"
        size={{ base: "xs", md: "sm" }}
        noOfLines={4}
        color="gray.400"
      >
        With Spider-Man's identity now revealed, Peter asks Doctor Strange for
        help. When a spell goes wrong, dangerous foes from other worlds start to
        appear, forcing Peter to discover what it truly means to be Spider-Man.{" "}
      </Heading>
      <Button
        size={{ base: "md", md: "lg" }}
        colorScheme="red"
        leftIcon={<FaPlay size={20} />}
      >
        Play
      </Button>
    </VStack>
  );
};

export default Banner;
