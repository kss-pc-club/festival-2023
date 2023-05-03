import { Heading as ChakraHeading, Box } from "@chakra-ui/react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ChakraHeading as="h2" mb={1} fontWeight="bold" fontSize="3xl">
        {children}
      </ChakraHeading>
      <Box
        h="1.5px"
        w="100%"
        bg="linear-gradient(90deg, rgba(247, 166, 12, 1) 10%, rgba(255, 34, 87, 1) 40%, rgba(154, 39, 238, 1) 68%, rgba(35, 102, 247, 1) 90%);"
        mb={4}
      />
    </>
  );
};

export default Heading;
