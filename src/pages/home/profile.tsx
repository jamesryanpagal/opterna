import Container from "@/components/container";
import { Text, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { IoLogoLinkedin, IoSend } from "react-icons/io5";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { COLORS } from "@/utils/constants";
import Avatar from "@/components/avatar";
import { profileImg } from "@/assets";
import { onOpenUrl } from "@/utils/helper";

const Profile = () => {
  return (
    <Container
      id="home"
      padding="none"
      cornerRadius="none"
      flexDisplay
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sm={{
        flexDirection: "column-reverse",
        justifyContent: "center",
        gap: "sm",
      }}
      className="min-h-[90vh]"
    >
      <Container
        padding="none"
        flexDisplay
        gap="sm"
        className="w-full md:w-[500px]"
      >
        <Text
          secondary
          className="w-full ml-0 md:ml-1 text-center md:text-start text-[24px]"
        >
          Hi, I'm James Ryan
        </Text>
        <Container padding="none" className="w-full">
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
          className="w-full ml-0 md:ml-1 text-center md:text-start md:text-[24px]"
        >
          Passionate about building dynamic and responsive web and mobile
          applications, with a strong commitment to creating high-quality,
          user-focused solutions.
        </Text>
        <Container
          padding="none"
          flexDisplay
          flexDirection="row"
          alignItems="center"
          gap="sm"
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
            onClick={() =>
              onOpenUrl(
                "https://www.linkedin.com/in/james-ryan-pagal-293a691ba/",
              )
            }
          >
            Linkedin
          </Button>
        </Container>
      </Container>
      <Container
        className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
        padding="none"
      >
        <Avatar src={profileImg} size="full" />
      </Container>
    </Container>
  );
};

export default Profile;
