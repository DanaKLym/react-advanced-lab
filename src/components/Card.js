import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.


  return (
      <VStack bg="white" borderRadius="15px" alignItems="left">
      <Image src={imageSrc} borderRadius="15px"/>
      <Heading as="h2" size="md" color="black" px={4}>
        {title}
      </Heading>
      <Text color="#758398" px={4}>{description}</Text>
      <HStack>
      <Text color="black" px={4} pb={4}>See more  &nbsp;<FontAwesomeIcon icon={faArrowRight} size="1x"/></Text>
      </HStack>
    </VStack>
  );
};

export default Card;
