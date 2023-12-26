import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const BlockTitle: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      fontWeight="bold"
      w="100%"
      textAlign="center"
      mt={{
        base: 8,
        md: 16
      }}
      mb={{
        base: 8,
        md: 16,
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default BlockTitle;
