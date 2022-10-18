import React from "react";
import { HStack, VStack, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { faker } from "@faker-js/faker";

const ListCard = (props) => {
  return (
    <VStack align="start" maxW="full" spacing={6} py={8}>
      <Heading as="h3" size="lg" color="white">
        {props.title}
      </Heading>
      <HStack
        w="full"
        display={props.wrap ? "inline-block" : "flex"}
        align="start"
        spacing="1"
        py="6"
        overflowY="hidden"
        overflowX="auto"
        shouldWrapChildren={props.wrap}
      >
        {[...Array(props.data)].map((item, index) => (
          <Card
            key={index}
            id={index + 1}
            cardImage={faker.image.people(640, 480, true) || ""}
            {...props}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default ListCard;
