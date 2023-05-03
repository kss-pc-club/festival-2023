import { Container as ChakraContainer } from "@chakra-ui/react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraContainer maxW="1200px" px={4} py={4}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
