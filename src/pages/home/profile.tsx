import Container from "@/components/container";
import { Text, TextSmall, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { IoLogoLinkedin, IoLogoWhatsapp, IoSend } from "react-icons/io5";
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
import { MdEmail } from "react-icons/md";

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

  return (
    <>
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
          <Separator />
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
            <Container className="hidden md:flex" padding="none" flexDisplay flexDirection="row" alignItems="center">
              <MdEmail />
              <TextSmall className="text-secondary-color">jamesryanpagal5@gmail.com</TextSmall>
            </Container>
            <Container className="hidden md:flex" padding="none" flexDisplay flexDirection="row" alignItems="center">
              <IoLogoWhatsapp />
              <TextSmall className="text-secondary-color">+63 966 569 5486</TextSmall>
            </Container>
          </Container>
        </Container>
        <Container
          className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
          padding="none"
        >
          <Avatar src={profileImg} size="full" />
        </Container>
      </Container>
      {renderModal}
    </>
  );
};

export default Profile;
