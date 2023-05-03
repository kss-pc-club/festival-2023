import Container from "./Container";
import Heading from "./Heading";
import {
  Box,
  Text,
  Circle,
  UnorderedList,
  ListItem,
  List,
  Link,
} from "@chakra-ui/react";

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" alignItems="center" my={2}>
      <Circle
        size={4}
        bg="linear-gradient(150deg, rgba(255, 146, 22, 1) 0%, rgba(255, 222, 0, 1) 100%);"
      />
      <Text ml={2} fontWeight="bold" fontSize={"2xl"}>
        {children}
      </Text>
    </Box>
  );
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <Text my={2}>{children}</Text>;
};

const Introduction = () => {
  return (
    <Container>
      <Heading>部活動紹介</Heading>
      <Text>
        古河中等パソコン部では、
        <strong>パソコンでできること全てを活動範囲</strong>
        とし、日々さまざまな活動を行っています。
        <br />
        各自が自由に活動を行っており、校内の他の部活動と比べてゆるい部活動です。
        <br />
        小学生のみなさん、ぜひ古河中等に入学しパソコン部に入部してください！お待ちしています。
      </Text>
      <SubHeading>主な活動内容</SubHeading>
      <Paragraph>
        パソコン部では、主に以下のような活動を行っています。
        <UnorderedList my={2}>
          <ListItem>競技プログラミング</ListItem>
          <ListItem>Web制作</ListItem>
          <ListItem>ゲーム制作</ListItem>
          <ListItem>CG制作</ListItem>
          <ListItem>電子工作</ListItem>
          <ListItem>タイピング</ListItem>
          <ListItem>創作活動（イラスト/音楽）</ListItem>
        </UnorderedList>
        またこのほか、例年は
        <UnorderedList my={2}>
          <ListItem>統計グラフコンクールへの参加（前期生のみ）</ListItem>
          <ListItem>ビーバーチャレンジへの参加（前期生のみ）</ListItem>
          <ListItem>文化祭における活動成果の展示・部誌制作</ListItem>
          <ListItem>体育祭における得点集計</ListItem>
          <ListItem>部内タイピング大会（2022年度より）</ListItem>
          <ListItem>部内活動報告会（2022年度より）</ListItem>
        </UnorderedList>
        などの活動も行っています。
      </Paragraph>
      <SubHeading>近年の実績</SubHeading>
      <Paragraph>
        <List my={2}>
          <ListItem>2023年度</ListItem>
          <UnorderedList my={2}>
            <ListItem>
              <Link href="https://www.nii.ac.jp/tatsujin/" color="blue.600">
                国立情報学研究所「情報科学の達人」
              </Link>
              4期生 2名採択
            </ListItem>
          </UnorderedList>
          <ListItem>2022年度</ListItem>
          <UnorderedList my={2}>
            <ListItem>
              <Link href="https://www.nii.ac.jp/tatsujin/" color="blue.600">
                国立情報学研究所「情報科学の達人」
              </Link>
              3期生 1名採択
            </ListItem>
            <ListItem>
              <Link
                href="https://www.joyobank.co.jp/kabunushi/community/techcontests.html"
                color="blue.600"
              >
                第2回 Joyo High School テックコンテスト
              </Link>
              エキスパート部門「優秀賞」1名「テック特別賞」1名
            </ListItem>
            <ListItem>
              <Link href="https://www.ioi-jp.org/" color="blue.600">
                第22回日本情報オリンピック
              </Link>
              本選進出 1名（本選Cランク）
            </ListItem>
            <ListItem>
              <Link href="https://pckoshien.u-aizu.ac.jp/" color="blue.600">
                パソコン甲子園2022（第20回全国高等学校プログラミングコンテスト）
              </Link>
              プログラミング部門 本選進出（チーム「sigman」）
            </ListItem>
          </UnorderedList>
          <ListItem>2021年度</ListItem>
          <UnorderedList my={2}>
            <ListItem>
              <Link href="https://www.ioi-jp.org/" color="blue.600">
                第21回日本情報オリンピック
              </Link>
              本選進出 1名（本選Bランク）
            </ListItem>
            <ListItem>
              <Link
                href="https://www.sinfonica.or.jp/tokei/graph/g69/list_6.html"
                color="blue.600"
              >
                第69回全国統計グラフコンクール
              </Link>
              パソコン統計グラフの部 佳作
            </ListItem>
            <ListItem>
              <Link
                href="https://www.pref.ibaraki.jp/kikaku/tokei/fukyu/tokei/kids/graph/graph2021/sakuhin1.html#ibaraki"
                color="blue.600"
              >
                令和3年度茨城県統計グラフコンクール
              </Link>
              パソコン統計グラフの部 茨城新聞社長賞
            </ListItem>
            <ListItem>応用情報技術者試験 合格 1名</ListItem>
            <ListItem>基本情報技術者試験 合格 1名</ListItem>
          </UnorderedList>
        </List>
      </Paragraph>
      <SubHeading>部活動紹介動画</SubHeading>
      <Paragraph>
        2022年度のオープンスクールで公開した部活動紹介動画です。
        <Box my={2} />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E8r9CUjQugI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Paragraph>
      <SubHeading>リンク</SubHeading>
      <Paragraph>
        Follow us!
        <UnorderedList my={2}>
          <ListItem>
            <Link href="https://kss-pc.club" color="blue.600">
              パソコン部公式サイト
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ksspcclub" color="blue.600">
              Twitter
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/@ksspcclub" color="blue.600">
              YouTube
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/ksspcclub/" color="blue.600">
              Instagram
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/kss-pc-club" color="blue.600">
              GitHub
            </Link>
          </ListItem>
        </UnorderedList>
      </Paragraph>
    </Container>
  );
};

export default Introduction;
