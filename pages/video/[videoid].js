import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  VStack,
  AspectRatio,
  HStack,
  Text,
} from "@chakra-ui/react";
import Navigation from "/components/Navigation";
import { faker } from "@faker-js/faker";

const Video = () => {
  const [dateVideo, setDateVideo] = useState(faker.date.between());
  const [titleVideo, setTitleVideo] = useState(faker.name.jobTitle());
  const [descVideo, setDescVideo] = useState(faker.lorem.paragraphs(10));
  const [castVideo, setCastVideo] = useState(faker.name.fullName());
  const [viewVideo, setViewVideo] = useState(faker.datatype.number());
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      bgColor="blackAlpha.900"
      minH="100vh"
    >
      <Head>
        <title>Video Name</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW={["container.xl"]}>
        <VStack spacing="10" w="full" alignItems="start">
          <Navigation />
          <VStack w="full" alignItems="center" color="white" overflow="hidden">
            <AspectRatio w="4xl" h="sm" ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              maxW="4xl"
              justify={"flex-start"}
              align={"flex-start"}
              overflowY="hidden"
            >
              <Box p={6} overflowY="auto">
                <Text color="green.500" mb={4}>
                  {dateVideo.toString()}
                </Text>
                <Text fontSize="lg" mb={4}>
                  {titleVideo}
                </Text>
                <Text>{descVideo}</Text>
              </Box>
              <Box p={6}>
                <HStack spacing={8} justify={"space-between"} align={"start"}>
                  <Text color={"gray.400"} fontSize="sm">
                    Cast
                  </Text>
                  <Text fontSize="sm">{castVideo}</Text>
                </HStack>
                <HStack w="full" justify={"space-between"} align={"start"}>
                  <Text color={"gray.400"} fontSize="sm">
                    View Count
                  </Text>
                  <Text fontSize="sm">{viewVideo}</Text>
                </HStack>
              </Box>
            </Stack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Video;
