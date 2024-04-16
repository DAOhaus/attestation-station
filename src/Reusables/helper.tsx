import React, { ReactNode } from "react";
import {
  chakra,
  HStack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

export const Logo = (props: any) => {
  return (
    <HStack>
      <>
        <Text fontSize='32' ml="3">🚉</Text>
        <Text fontSize='2xl' fontWeight="bold">AtteStation</Text>
      </>
    </HStack>
  );
};

export const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={"_blank"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
