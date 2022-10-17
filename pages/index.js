import React from "react";
import Head from "next/head";
import { Box, Container, VStack } from "@chakra-ui/react";
import Navigation from "/components/Navigation";
import Banner from "/components/Banner";
import Card from "/components/Card";
import { faker } from "@faker-js/faker";

const Home = () => {
  const randomBusinessImage = faker.image.people();
  const basicBoxStyles = {
    position: "absolute",
    top: "0",
    left: "0",

    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${randomBusinessImage}) center/cover no-repeat`,
    backgroundBlendMode: "normal, darken",
    mixBlendMode: "darken",
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      bgColor="blackAlpha.700"
    >
      <Head>
        <title>Netlix Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box sx={basicBoxStyles} w="full" h="80vh" zIndex="-999"></Box>
      <Container maxW={["container.xl"]}>
        <VStack spacing="32" w="full" h="80vh" alignItems="start">
          <Navigation />
          <Banner />
        </VStack>
        <VStack alignItems="start">
          <Card title="Disney" size="large" />
          <Card title="Travel" size="small" />
          <Card title="Productivity" size="medium" />
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;
