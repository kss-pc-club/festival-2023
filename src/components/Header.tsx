import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

const Header = () => {
  //一番上に戻ったら再度表示したい
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
      }}
    >
      <Box
        w="100%"
        h={1}
        bg="linear-gradient(90deg, rgba(247, 166, 12, 1) 10%, rgba(255, 34, 87, 1) 40%, rgba(154, 39, 238, 1) 68%, rgba(35, 102, 247, 1) 90%);"
      />
      <Box
        w="100%"
        display="flex"
        boxShadow={scrollY > 0 ? "0px 2px 10px rgba(0, 0, 0, 0.15)" : "none"}
      >
        <Box
          mx="auto"
          px={4}
          py={2}
          w="100%"
          maxW="1200px"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="#2E2F36"
            letterSpacing={-1}
            sx={{
              fontFamily: "Poppins",
            }}
          >
            Hello KSS PC Club
          </Text>
          <Box
            h="100%"
            ml="auto"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={4}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="xl"
              onClick={() =>
                window.open("https://twitter.com/ksspcclub", "_blank")
              }
              color="#2E2F36"
              style={{ cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              onClick={() =>
                window.open("https://github.com/kss-pc-club", "_blank")
              }
              color="#2E2F36"
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
