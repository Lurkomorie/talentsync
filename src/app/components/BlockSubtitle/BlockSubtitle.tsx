import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const BlockSubtitle: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text
      fontSize={{
        base: "lg",
        md: "xl",
      }}
      w="100%"
      textAlign="center"
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

export default BlockSubtitle;
