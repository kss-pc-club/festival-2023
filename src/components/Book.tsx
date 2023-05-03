import Container from "./Container";
import Heading from "./Heading";
import { Text } from "@chakra-ui/react";

const Book = () => {
  return (
    <Container>
      <Heading>部誌</Heading>
      <Text>パソコン部では、文化祭に合わせて毎年部誌を制作しています。</Text>
    </Container>
  );
};

export default Book;
