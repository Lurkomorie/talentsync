import {
  Box,
  Text,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  DrawerFooter,
  Button,
  useDisclosure,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import BookMeetingBtn from "../BookMeetingBtn/BookMeetingBtn";

const Toolbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItems = (
    <>
      <Text fontWeight="bold" fontSize="md" cursor="pointer">
        Process
      </Text>
      <Text fontWeight="bold" fontSize="md" cursor="pointer">
        About Eastern Europe
      </Text>
      <Text fontWeight="bold" fontSize="md" cursor="pointer">
        Why Us?
      </Text>
      <BookMeetingBtn />
    </>
  );

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxW="container.xl"
      w="100%"
      py={{
        base: 4,
        md: 12,
      }}
      px={{
        base: 4,
        md: 6,
      }}
      color="brand.400"
    >
      <Text
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight="bold"
        color="brand.400"
        pl={{
          base: 2,
          md: 0,
        }}
      >
        TalentSync
      </Text>
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={5}>{menuItems}</HStack>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open drawer"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          sx={{
            svg: {
              fontSize: "1.5em",
            },
          }}
        />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay>
            <DrawerContent color="brand.400">
              <DrawerCloseButton mt={2} />
              <DrawerHeader>
                <Text
                  fontSize={{ base: "xl", md: "3xl" }}
                  fontWeight="bold"
                  color="brand.400"
                  pl={{
                    base: 2,
                    md: 0,
                  }}
                >
                  TalentSync
                </Text>
              </DrawerHeader>
              <DrawerBody py={8}>
                <VStack spacing={5}>{menuItems}</VStack>
              </DrawerBody>
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Toolbar;
