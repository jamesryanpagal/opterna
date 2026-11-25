import Container from "@/components/container";
import { Text, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { IoLogoLinkedin } from "react-icons/io5";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { COLORS } from "@/utils/constants";
import Avatar from "@/components/avatar";
import { profileImg } from "@/assets";
import { onOpenUrl } from "@/utils/helper";
import { useMemo, useRef, useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import { TextAreaGroup } from "@/components/input-group";
import { ArrowDownToLine, Mail, Phone, SendHorizonal } from "lucide-react";
import { cv } from "@/assets";
import GridMotion from "@/components/grid-motion";
import axios, { AxiosError } from "axios";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const API_URL = "https://api.opterna.cloud/api/v1/email/send";

type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const Profile = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [emailData, setEmailData] = useState<EmailData>({
    from: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSetMessageData = (key: keyof EmailData) => (value: string) => {
    setEmailData(prev => ({ ...prev, [key]: value }));
  };

  const disableSend = useMemo(() => {
    const { from, subject, message } = emailData;
    return !from || !subject || !message;
  }, [emailData]);

  const onSendMessage = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(API_URL, emailData);

      if (response.status < 200 || response.status >= 300) {
        setIsLoading(false);
        setError(response.data.message);
        return;
      }

      setIsLoading(false);
      setToggleModal(false);

      toast.success("Message sent successfully.", {
        description:
          "Your message has been sent successfully. I will get back to you as soon as possible.",
        position: "bottom-center",
        duration: 5000,
      });
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      if (
        err.response?.data.message &&
        Array.isArray(err.response.data.message)
      ) {
        setIsLoading(false);
        setError(
          err.response.data.message
            .map(msg => `${msg.charAt(0).toUpperCase() + msg.slice(1)}`)
            .join(" "),
        );
        return;
      }

      setIsLoading(false);
      setError("Something went wrong. Please try again later.");
    }
  };

  const renderModal = useMemo(() => {
    return (
      <Sheet
        title="How can i help you?"
        description="Feel free to reach out for collaborations or inquiries. You can also contact me via +63 966 569 5486."
        open={toggleModal}
        onOpenChange={e => setToggleModal(e)}
        side="bottom"
      >
        <Container flexDisplay padding="none">
          <Container
            flexDisplay
            padding="none"
            className="w-full md:w-[500px] self-center"
          >
            {error && (
              <Container
                bordered
                className="bg-destructive/10 border-destructive"
              >
                <Text secondary className="text-center">
                  {error}
                </Text>
              </Container>
            )}
            <Input
              label="From"
              placeholder="Enter your email"
              onChange={e => onSetMessageData("from")(e.target.value)}
            />
            <Input
              label="Subject"
              placeholder="Enter the subject"
              onChange={e => onSetMessageData("subject")(e.target.value)}
            />
            <TextAreaGroup
              ref={ref}
              label="Message"
              placeholder="Write a message"
              className="min-h-[200px] max-h-[300px]"
              onChange={e => onSetMessageData("message")(e.target.value)}
            />
            <Button
              className="mt-2 bg-success hover:bg-success/80"
              onClick={onSendMessage}
              disabled={isLoading || disableSend}
              loading={isLoading}
            >
              Send Message
            </Button>
          </Container>
        </Container>
      </Sheet>
    );
  }, [toggleModal, error, isLoading, disableSend, onSendMessage]);

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
        className="border-b border-lightened-dark-bg"
        cornerRadius="none"
      >
        <Container
          className="min-h-screen"
          flexDisplay
          padding="none"
          gap="none"
        >
          <div className="absolute h-full w-full -z-10">
            <GridMotion
              items={[
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/javascript/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/typescript/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/react/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/angular/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nodedotjs/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/express/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nestjs/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tanstack/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/mysql/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/postgresql/default.svg",
                "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/docker/default.svg",
              ]}
              rows={6}
              aspectRatio={1.3}
              gap={16}
              radius={14}
              angle={-12}
              tilt={0}
              speed={24}
              direction="alternate"
              parallax={0.5}
              spotlight={0.6}
              dim={0.65}
              fade={0.5}
              grayscale={true}
            />
          </div>
          <Container
            id="home"
            padding="none"
            cornerRadius="none"
            flexDisplay
            alignItems="center"
            justifyContent="center"
            className="flex-1 w-[90%] md:w-[80%] lg:w-[65%] self-center border-l border-r border-lightened-dark-bg relative"
            gap="none"
          >
            <Container
              padding="lg"
              flexDisplay
              alignItems="center"
              justifyContent="center"
              className="w-full flex-1"
            >
              <Container
                padding="lg"
                flexDisplay
                alignItems="center"
                gap="md"
                className="md:w-[500px] border border-lightened-dark-bg/50 bg-background/5 backdrop-blur-lg relative pt-[60px] md:pt-[150px] translate-y-[60px] md:translate-y-[100px]"
                cornerRadius="lg"
              >
                <Container
                  className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  padding="none"
                >
                  <Avatar src={profileImg} size="full" />
                </Container>
                <Container padding="none" cornerRadius="none">
                  <Text
                    secondary
                    className="w-full ml-0 md:ml-1 text-center text-[14px] md:text-[24px]"
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
                      className="text-center w-full text-3xl md:text-7xl font-bold"
                      cursorClassName="border-border text-3xl md:text-7xl w-[2px] md:w-[5px] h-[30px] md:h-[60px]"
                      textColors={[
                        COLORS.success,
                        COLORS.mediumTorquoise,
                        COLORS.atomicTangerine,
                      ]}
                    />
                    <Title
                      level={1}
                      className="text-center text-3xl md:text-7xl"
                    >
                      Developer
                    </Title>
                  </Container>
                </Container>
                <Text
                  secondary
                  className="w-full ml-0 md:ml-1 text-center md:text-[20px]"
                >
                  Full-Stack Software Engineer with{" "}
                  <strong className="text-medium-torquoise">
                    4+ years of experience
                  </strong>{" "}
                  developing and scaling robust{" "}
                  <strong className="text-medium-torquoise">web</strong> and{" "}
                  <strong className="text-medium-torquoise">mobile</strong>{" "}
                  applications.
                </Text>
                <Container padding="none" className="hidden md:block">
                  <Button
                    className="w-full bg-success hover:bg-success/80 self-center"
                    prefix={<SendHorizonal />}
                    onClick={() => setToggleModal(true)}
                  >
                    Get in touch
                  </Button>
                </Container>
              </Container>
            </Container>
          </Container>
          <Container
            cornerRadius="none"
            flexDisplay
            padding="none"
            className="w-full border-t border-lightened-dark-bg md:hidden flex"
            gap="none"
          >
            <Container
              flexDisplay
              flexDirection="row"
              sm={{
                flexDirection: "column",
              }}
              alignItems="center"
              padding="none"
              cornerRadius="none"
              gap="none"
              className="w-[90%] self-center md:w-[80%] lg:w-[65%]"
            >
              <Container
                className="flex-1 w-full border-l border-r md:border-r-[0.5px] border-b-[0.5px] md:border-b-0 border-lightened-dark-bg bg-success hover:bg-success/80 cursor-pointer"
                flexDisplay
                cornerRadius="none"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding="md"
                onClick={() => setToggleModal(true)}
              >
                <SendHorizonal />
                <Text>Get in touch</Text>
              </Container>
            </Container>
          </Container>
          <Container
            cornerRadius="none"
            flexDisplay
            padding="none"
            className="w-full border-t border-lightened-dark-bg"
            gap="none"
          >
            <Container
              flexDisplay
              flexDirection="row"
              sm={{
                flexDirection: "column",
              }}
              alignItems="center"
              padding="none"
              cornerRadius="none"
              gap="none"
              className="w-[90%] self-center md:w-[80%] lg:w-[65%]"
            >
              <Container
                className="flex-1 w-full border-l border-r md:border-r-[0.5px] border-b-[0.5px] md:border-b-0 border-lightened-dark-bg bg-primary hover:bg-primary/80 cursor-pointer"
                flexDisplay
                cornerRadius="none"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding="md"
                onClick={onDownloadPdf}
              >
                <ArrowDownToLine />
                <Text>Download CV</Text>
              </Container>
              <Container
                className="flex-1 w-full border-r border-l md:border-l-[0.5px] border-t-[0.5px] md:border-t-0 border-lightened-dark-bg bg-secondary hover:bg-secondary/80 cursor-pointer"
                flexDisplay
                cornerRadius="none"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding="md"
                onClick={() =>
                  onOpenUrl(
                    "https://www.linkedin.com/in/james-ryan-pagal-293a691ba/",
                  )
                }
              >
                <IoLogoLinkedin className="size-6" />
                <Text>Linkedin</Text>
              </Container>
            </Container>
          </Container>
          <Container
            cornerRadius="none"
            flexDisplay
            padding="none"
            className="w-full border-t border-lightened-dark-bg"
            gap="none"
          >
            <Container
              flexDisplay
              flexDirection="row"
              sm={{
                flexDirection: "column",
              }}
              alignItems="center"
              padding="none"
              cornerRadius="none"
              gap="none"
              className="w-[90%] self-center md:w-[80%] lg:w-[65%] bg-dark"
            >
              <Container
                className="flex-1 w-full border-l border-r md:border-r-[0.5px] border-b-[0.5px] md:border-b-0 border-lightened-dark-bg"
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
                className="flex-1 w-full border-r border-l md:border-l-[0.5px] border-t-[0.5px] md:border-t-0 border-lightened-dark-bg"
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
