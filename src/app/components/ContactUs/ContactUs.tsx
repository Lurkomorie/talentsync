import {
  Container,
  Flex,
  Link,
  SimpleGrid,
  VStack,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import BlockSubtitle from "../BlockSubtitle/BlockSubtitle";
import { contactInfo } from "./ContactUs.texts";

const ContactUs: React.FC = () => {
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
      <BlockTitle mb={2}>Or Let Us Contact You</BlockTitle>
      <BlockSubtitle maxW="container.sm" mb={{ base: 4, md: 6 }}>
        Feel free to leave your contact information and we will get back to you
      </BlockSubtitle>
      <SimpleGrid columns={[1, null, 2]} spacing={8} alignItems="stretch">
        <VStack h="100%" spacing={0} align="start" justify="center">
          <Link
            fontWeight="bold"
            fontSize="lg"
            textAlign="left"
            textDecoration="none"
            href={`tel:${contactInfo.phone}`}
          >
            {contactInfo.phone}
          </Link>
          <Text fontWeight="bold" fontSize="lg" textAlign="left">
            {contactInfo.email}
          </Text>
          <Text fontSize="sm" textAlign="left">
            {contactInfo.address}
          </Text>
        </VStack>
        <VStack h="100%">
          <Input
            placeholder="Name"
            borderRadius="full"
            borderColor="brand.400"
          />
          <Input
            placeholder="Email"
            borderRadius="full"
            borderColor="brand.400"
          />
          <Textarea
            placeholder="Your Comment"
            borderRadius="24px"
            borderColor="brand.400"
            rows={6}
          />
          <Button
            px={{
              base: 4,
              md: 6,
            }}
            fontWeight="bold"
            py={2}
            bg="brand.400"
            color="white"
            rounded="full"
            w="full"
            
            _hover={{
              bg: "brand.300",
              textDecoration: "none",
            }}
          >
            Send
          </Button>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default ContactUs;
