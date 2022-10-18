import React from "react";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navigation from "/components/Navigation";
import Card from "/components/Card";

const MyList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      bgColor="blackAlpha.900"
      minH="100vh"
    >
      <Head>
        <title>Playlist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box bgColor={"black"} w="full" minH="60vh">
        <Container maxW={["container.xl"]}>
          <Navigation />
          <Card
            title="My List"
            size="small"
            wrap={true}
            data={5}
            animation={false}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default MyList;
