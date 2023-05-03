import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box width="100%" py={2} textAlign="center">
        <Text fontSize="sm" color="gray.700">
          © 2023 KSS PC Club
        </Text>
      </Box>
    </footer>
  );
};

export default Footer;
