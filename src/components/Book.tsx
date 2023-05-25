import Container from "./Container";
import Heading from "./Heading";
import {
  Text,
  Box,
  Image,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

const Book = () => {
  return (
    <Container>
      <Heading>部誌</Heading>
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          src="/images/cover.png"
          alt="book"
          w="100%"
          maxW="320px"
          mx={{ base: "auto", md: 4 }}
        />
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
        >
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            目次
          </Text>
          <Box h="1px" w="100%" bg="gray.700" />
          <UnorderedList mt={4} spacing={0.5} px={2}>
            <ListItem>部員アンケート2023</ListItem>
            <ListItem>茨城県版新型コロナ対策サイトの振り返り</ListItem>
            <ListItem>ﾊﾟｿｺﾝｶﾀｶﾀしてたら大学合格した話+大学生活所感</ListItem>
            <ListItem>学生のキャッシュレス決済を考える</ListItem>
            <ListItem>ソフトウェアシンセサイザを作ってみよう</ListItem>
            <ListItem>
              ニコニコ動画風コメント掲示板2はこうやって作られた
            </ListItem>
            <ListItem>茨城県教育情報ネットワークの脆弱性を報告した話</ListItem>
            <ListItem>技術と人間 + pygameについて</ListItem>
            <ListItem>AIと一緒にゲームを作ろう</ListItem>
            <ListItem>「文字の自動生成の仕組み」について</ListItem>
          </UnorderedList>
          <Link
            href="https://repos.kss-pc.club/book-2023/book.pdf"
            isExternal
            alignSelf="center"
            mt={4}
            border="1px solid"
            borderColor="orange.500"
            width="100%"
            textAlign="center"
            py={2}
            color="orange.500"
            _hover={{
              bg: "orange.500",
              color: "white",
              textDecoration: "none",
            }}
          >
            PDFで読む（約7MB）
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Book;
