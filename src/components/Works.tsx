import Container from "./Container";
import Heading from "./Heading";
import {
  Box,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Work = {
  title: string;
  desc: string;
  img: string;
  url?: string;
  github?: string;
};

const works: Work[] = [
  {
    title: "シューティングゲーム",
    desc: "Pythonで作ったシンプルなシューティングゲーム",
    img: "/images/works/shooting.jpg",
  },

  {
    title: "帰路",
    desc: "ジャンル：ホラー(？)おうちに帰る話です。",
    img: "/images/works/kaeri.png",
  },
  {
    title: "イラスト",
    desc: "絵です。",
    img: "/images/works/ar15.png",
  },
  {
    title: "スネークゲーム Created with AI",
    desc: "近頃話題の対話型AI(ChatGPT)でスネークゲームを作りました。制作過程は部誌に書かれているので興味がある方はぜひそちらも読んでください！",
    img: "/images/works/snake.jpg",
    url: "https://jsfiddle.net/vkqwj439/show/",
  },
  {
    title: "platformerもどき",
    desc: "plat formerのようなゲームです。クオリティが低いのでもどき(似たようで違うもの)になってました。赤色に当たったらゲームオーバーなので避けながら進んでいきましょう！難易度は３つに分かれています。",
    img: "/images/works/platformer.png",
  },
  {
    title: "VS数学",
    desc: "数学の作品をモチーフにした攻撃がやってきます 逃げて下さい！！！ 倒れなければ勝利です！途中で倒れたら負けです 頑張ってください",
    img: "/images/works/vs.jpg",
  },
  {
    title: "英文生成AIで和訳の練習をしよう",
    desc: "昨今話題の ChatGPT を利用したソフトウェアです。ランダムな英文が生成されるので、その和訳が練習できます。",
    img: "/images/works/translation.png",
  },
];

const Works = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [workIndex, setWorkIndex] = useState(0);
  return (
    <Container>
      <Heading>展示物</Heading>
      <Text>文化祭で展示した、部員の作品を紹介します。</Text>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        mt={4}
        gap={"8px"}
      >
        {works?.map((work, index) => (
          <Box
            key={index}
            width="100%"
            maxW={{
              base: "100%",
              sm: "calc(50% - 8px)",
              md: "calc(33% - 8px)",
              lg: "calc(25% - 8px)",
            }}
          >
            <Image
              src={work.img}
              alt={work.title}
              w="100%"
              rounded="sm"
              aspectRatio={16 / 9}
              boxShadow="0px 2px 10px rgba(0, 0, 0, 0.15)"
            />
            <Text mt={2} fontSize="xl" fontWeight="bold">
              {work.title}
            </Text>
            <Box
              width="100%"
              border="1px solid"
              cursor="pointer"
              textAlign="center"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              gap={2}
              py={0.5}
              role="group"
              sx={{
                borderImage:
                  "linear-gradient(150deg, rgba(247, 166, 12, 1) 10%, rgba(255, 34, 87, 1) 40%, rgba(154, 39, 238, 1) 68%, rgba(35, 102, 247, 1) 90%);",
                borderImageSlice: 1,
              }}
              bg="white"
              mt={2}
              onClick={() => {
                onOpen();
                setWorkIndex(index);
              }}
            >
              <Text
                background="linear-gradient(150deg, rgba(247, 166, 12, 1) 10%, rgba(255, 34, 87, 1) 40%, rgba(154, 39, 238, 1) 68%, rgba(35, 102, 247, 1) 90%);)"
                color="transparent"
                bgClip="text"
                width="fit-content"
                display="inline-block"
                fontWeight="bold"
                _groupHover={{
                  transition: "0.3s",
                  transform: "translateX(-5px)",
                }}
              >
                詳細
              </Text>
              <Box
                _groupHover={{
                  transition: "0.3s",
                  transform: "translateX(5px)",
                }}
              >
                <FontAwesomeIcon icon={faArrowRight} size="xs" color="black" />
              </Box>
            </Box>
            <Modal
              isOpen={isOpen && workIndex === index}
              onClose={onClose}
              size="xl"
            >
              <ModalOverlay />
              <ModalContent borderRadius="md" mx={2}>
                <ModalHeader />
                <ModalCloseButton />
                <ModalBody mt={2} mb={4}>
                  <Image
                    src={work.img}
                    alt={work.title}
                    w="100%"
                    rounded="md"
                    aspectRatio={16 / 9}
                  />
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="start"
                    mt={4}
                    gap={2}
                  >
                    <Text fontSize="xl" fontWeight="bold">
                      {work.title}
                    </Text>
                    <Box ml="auto" />
                    {work.url && (
                      <FontAwesomeIcon
                        icon={faHouse}
                        size="xl"
                        onClick={() => window.open(`${work.url}`, "_blank")}
                        color="#1772e8"
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {work.github && (
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                        onClick={() => window.open(`${work.github}`, "_blank")}
                        color="#2E2F36"
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </Box>

                  <Text mt={2}>{work.desc}</Text>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Works;
