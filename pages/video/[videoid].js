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
  Circle,
} from "@chakra-ui/react";
import Navigation from "/components/Navigation";
import { faker } from "@faker-js/faker";
import { BiLike } from "@react-icons/all-files/bi/BiLike";
import { BiDislike } from "@react-icons/all-files/bi/BiDislike";

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
            <Box position="relative">
              <AspectRatio w={{ base: "xl", md: "4xl" }} h="sm" ratio={1}>
                <iframe
                  title="naruto"
                  src={`https://www.youtube.com/embed/${"QhBnZ6NPOY0"}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                  allowFullScreen
                  frameBorder="0"
                  style={{
                    borderRadius: "10px 10px 0px 0px",
                    composes: "borderBoxShadow",
                  }}
                />
              </AspectRatio>
              <HStack position={"absolute"} top={"72"} left={"8"} spacing={"4"}>
                <Circle size="14" bg="transparent" border={"2px"} color="white">
                  <BiLike size={"40px"} />
                </Circle>
                <Circle size="14" bg="transparent" border={"2px"} color="white">
                  <BiDislike size={"40px"} />
                </Circle>
              </HStack>
            </Box>

            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              maxW={{ base: "xl", md: "4xl" }}
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
