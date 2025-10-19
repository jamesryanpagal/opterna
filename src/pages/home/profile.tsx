import Container from "@/components/container";
import { Text, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { IoLogoLinkedin, IoSend } from "react-icons/io5";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { COLORS } from "@/utils/constants";
import Avatar from "@/components/avatar";
import { profileImg } from "@/assets";

const Profile = () => {
  return (
    <Container
      padding={0}
      cornerRadius={0}
      flexDisplay
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sm={{
        flexDirection: "column-reverse",
        justifyContent: "center",
        gap: 50,
      }}
      className="h-[90vh]"
    >
      <Container
        padding={0}
        flexDisplay
        gap={20}
        className="w-full md:w-[500px]"
      >
        <Text
          secondary
          className="w-full ml-0 md:ml-1 text-center md:text-start text-[24px]"
        >
          Hi, I'm James Ryan
        </Text>
        <Container padding={0} className="w-full">
          <TypingText
            text={["Full Stack", "Web", "Mobile"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-center md:text-start w-full text-7xl font-bold"
            cursorClassName="border-border text-7xl w-[5px] h-[60px]"
            textColors={[
              COLORS.dodgerBlue,
              COLORS.mediumTorquoise,
              COLORS.atomicTangerine,
            ]}
          />
          <Title level={1} className="text-center md:text-start text-7xl">
            Developer
          </Title>
        </Container>
        <Text
          secondary
          className="w-full ml-0 md:ml-1 text-center md:text-start text-[24px]"
        >
          Passionate about building dynamic and responsive web and mobile
          applications, with a strong commitment to creating high-quality,
          user-focused solutions.
        </Text>
        <Container
          padding={0}
          flexDisplay
          flexDirection="row"
          alignItems="center"
          gap={10}
          className="w-full"
        >
          <Button
            className="flex-1 md:flex-auto"
            prefix={<IoSend />}
            variant="success"
          >
            Reach out today
          </Button>
          <Button
            className="flex-1 md:flex-auto"
            prefix={<IoLogoLinkedin />}
            variant="secondary"
          >
            Linkedin
          </Button>
        </Container>
      </Container>
      <Container className="w-[350px] h-[350px]" padding={0}>
        <Avatar src={profileImg} size="full" />
      </Container>
    </Container>
  );
};

export default Profile;
