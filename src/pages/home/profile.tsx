import Container from "@/components/container";
import { Text, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { IoLogoLinkedin, IoSend } from "react-icons/io5";
import { TiAttachmentOutline } from "react-icons/ti";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { COLORS } from "@/utils/constants";
import Avatar from "@/components/avatar";
import { profileImg } from "@/assets";
import { onOpenUrl } from "@/utils/helper";
import { useMemo, useRef, useState } from "react";
import { Modal } from "@/components/ui/dialog";
import { TextAreaGroup } from "@/components/input-group";
import { IoMdImage } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { ArrowDownToLine, Mail, Phone } from "lucide-react";
import { cv } from "@/assets";

const Profile = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [toggleModal, setToggleModal] = useState(false);

  const renderModal = useMemo(() => {
    return (
      <Modal
        title="How can i help you?"
        description="Feel free to reach out for collaborations or inquiries. You can also contact me via +63 966 569 5486."
        open={toggleModal}
        onOpenChange={e => setToggleModal(e)}
      >
        <TextAreaGroup
          ref={ref}
          placeholder="Write a message"
          className="min-h-[200px] max-h-[300px]"
          postfix={
            <Container
              className="w-full"
              padding="none"
              flexDisplay
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Container
                padding="none"
                flexDisplay
                flexDirection="row"
                alignItems="center"
                className="gap-1"
              >
                <Button variant="ghost" className="rounded-md" size="icon">
                  <IoMdImage className="size-5.5" />
                </Button>
                <Container padding="none" className="h-[20px]">
                  <Separator orientation="vertical" />
                </Container>
                <Button variant="ghost" className="rounded-md" size="icon">
                  <TiAttachmentOutline className="size-5.5" />
                </Button>
              </Container>
              <Button
                className="rounded-full"
                variant="success"
                size="icon"
                onClick={() => console.log(ref.current?.value)}
              >
                <IoSend className="size-4" />
              </Button>
            </Container>
          }
        />
      </Modal>
    );
  }, [toggleModal]);

  const onDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "James Ryan Pagal - Full-Stack Developer Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <Container
        padding="none"
        flexDisplay
        className="border-b border-lightened-dark-bg"
        cornerRadius="none"
      >
        <Container
          id="home"
          padding="lg"
          cornerRadius="none"
          flexDisplay
          alignItems="center"
          justifyContent="center"
          className="min-h-screen w-full md:w-[80%] lg:w-[65%] self-center border-l border-r border-lightened-dark-bg"
        >
          <Container
            padding="none"
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            sm={{
              flexDirection: "column-reverse",
              justifyContent: "center",
              gap: "sm",
            }}
            className="w-full"
          >
            <Container
              padding="none"
              flexDisplay
              gap="md"
              className="md:w-[500px]"
            >
              <Container padding="none" cornerRadius="none">
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
                      COLORS.success,
                      COLORS.mediumTorquoise,
                      COLORS.atomicTangerine,
                    ]}
                  />
                  <Title
                    level={1}
                    className="text-center md:text-start text-7xl"
                  >
                    Developer
                  </Title>
                </Container>
              </Container>
              <Text
                secondary
                className="w-full ml-0 md:ml-1 text-center md:text-start md:text-[20px]"
              >
                Full-Stack Software Engineer with{" "}
                <strong className="text-success">4+ years of experience</strong>{" "}
                developing and scaling robust{" "}
                <strong className="text-success">web</strong> and{" "}
                <strong className="text-success">mobile</strong> applications.
              </Text>
              <Container
                padding="none"
                flexDisplay
                flexDirection="row"
                alignItems="center"
                gap="sm"
                className="w-full flex-wrap"
              >
                <Button
                  className="w-full md:w-auto"
                  prefix={<ArrowDownToLine />}
                  onClick={onDownloadPdf}
                >
                  Download CV
                </Button>
                <Button
                  className="w-full md:w-auto"
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
          <Container
            cornerRadius="none"
            flexDisplay
            padding="none"
            className="absolute bottom-0 left-0 w-full border-t border-lightened-dark-bg"
          >
            <Container
              flexDisplay
              flexDirection="row"
              alignItems="center"
              padding="none"
              cornerRadius="none"
              gap="none"
              className="w-full md:w-[80%] lg:w-[65%] self-center"
            >
              <Container
                className="flex-1 border-r-[0.5px] border-lightened-dark-bg"
                flexDisplay
                cornerRadius="none"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding="md"
              >
                <Mail />
                <Text secondary>jamesryanpagal5@gmail.com</Text>
              </Container>
              <Container
                className="flex-1 border-l-[0.5px] border-lightened-dark-bg"
                flexDisplay
                cornerRadius="none"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding="md"
              >
                <Phone />
                <Text secondary>+63 966 569 5486</Text>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      {renderModal}
    </>
  );
};

export default Profile;
