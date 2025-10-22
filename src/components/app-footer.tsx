import { Text } from "./typography";
import pckg from "../../package.json";
import { Separator } from "./ui/separator";
import Container from "./container";
import Avatar from "./avatar";
import { appIcon } from "@/assets";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const AppFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-10 py-5 justify-center items-center gap-4 text-sm border-border/40 border-t bg-white dark:bg-card">
      <Container
        padding="none"
        flexDisplay
        flexDirection="row"
        alignItems="center"
        gap="sm"
      >
        <Avatar src={appIcon} />
        <Container padding="none">
          <Text className="font-bold">OpTerna</Text>
          <Text secondary className="text-xs">
            Turning possibilities into Solutions
          </Text>
        </Container>
      </Container>
      <Container padding="none" className="h-8 hidden sm:block">
        <Separator orientation="vertical" />
      </Container>
      <Container padding="none" className="w-[220px] block sm:hidden">
        <Separator />
      </Container>
      <Container
        padding="none"
        flexDisplay
        flexDirection="row"
        alignItems="center"
        className="space-x-1 w-[220px] gap-2 sm:w-auto"
        sm={{
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Container
          padding="none"
          flexDisplay
          flexDirection="row"
          alignItems="center"
        >
          <MdEmail size={18} />
          <Text secondary className="text-xs">
            jamesryanpagal5@gmail.com
          </Text>
        </Container>
        <Container
          padding="none"
          flexDisplay
          flexDirection="row"
          alignItems="center"
        >
          <IoLogoWhatsapp size={18} />
          <Text secondary className="text-xs">
            +63 966 569 5486
          </Text>
        </Container>
      </Container>
      <Container padding="none" className="h-8 hidden sm:block">
        <Separator orientation="vertical" />
      </Container>
      <Container padding="none" className="w-[220px] block sm:hidden">
        <Separator />
      </Container>
      <Text secondary className="text-xs w-[220px] sm:w-auto">
        Version {pckg.version}
      </Text>
    </div>
  );
};

export default AppFooter;
