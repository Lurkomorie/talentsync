import {
  Box,
  Container,
  Flex,
  Icon,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import BlockSubtitle from "../BlockSubtitle/BlockSubtitle";
import { WhyChooseItemProps } from "./WhyChoose.types";
import { whyChooseItems } from "./WhyChoose.texts";

const WhyChoose: React.FC = () => {
  return (
    <Container
      maxW="container.lg"
      color="brand.400"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={{
        base: 16,
        md: 32,
      }}
    >
      <BlockTitle mb={2}>Why choose TalentSync?</BlockTitle>
      <BlockSubtitle maxW="container.sm">
        With a team of more than 30 people we strive to offer the best service
        possible.
      </BlockSubtitle>
      <SimpleGrid columns={[1, 2, null, 4]} spacing={8}>
        {whyChooseItems.map((item, index) => (
          <WhyChooseItem key={index} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const WhyChooseItem: React.FC<WhyChooseItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="85px"
        w="100%"
        pb={4}
      >
        <Icon as={icon} fontSize="6em" color="brand.400" />
      </Box>
      <VStack alignItems="start" justifyContent="center">
        <Text fontWeight="bold" w="full" fontSize="lg" textAlign="center">
          {title}
        </Text>
        <Text fontSize="md" textAlign="center">
          {description}
        </Text>
      </VStack>
    </Flex>
  );
};

export default WhyChoose;
