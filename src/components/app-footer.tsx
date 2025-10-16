import { TextSmall } from "./typography";
import pckg from "../../package.json";
import { Separator } from "./ui/separator";

const AppFooter = () => {
  return (
    <div className="flex flex-col min-h-10 py-5 items-center justify-center space-x-4 text-sm bg-white dark:bg-card sm:flex-row">
      <TextSmall>© 2025 Opterna. All rights reserved.</TextSmall>
      <Separator orientation="vertical" className="h-5" color="red" />
      <TextSmall>Version {pckg.version}</TextSmall>
    </div>
  );
};

export default AppFooter;
