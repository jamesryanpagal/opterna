import { Text } from "./typography";
import pckg from "../../package.json";
import { Separator } from "./ui/separator";
import Container from "./container";
import Avatar from "./avatar";
import { appIcon } from "@/assets";

const AppFooter = () => {
  return (
    <div className="flex flex-row min-h-10 py-5 justify-center items-center gap-4 text-sm border-t border-lightened-dark-bg bg-white dark:bg-dark">
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
      <Container padding="none" className="h-8">
        <Separator orientation="vertical" />
      </Container>
      <Text secondary className="text-xs">
        Version {pckg.version}
      </Text>
    </div>
  );
};

export default AppFooter;
