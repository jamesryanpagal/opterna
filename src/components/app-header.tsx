import { Link } from "react-router-dom";
import Container from "./container";
import Avatar from "./avatar";
import { appIcon } from "@/assets";
import Navigation from "./navigation";
import { navItems } from "@/utils/data";
import { Button } from "./ui/button";
import { IoLogoGithub } from "react-icons/io5";

const AppHeader = () => {
  return (
    <Container
      cornerRadius={0}
      flexDisplay
      flexDirection="row"
      alignItems="center"
      padding={0}
      justifyContent="space-between"
      className="h-[10vh]"
    >
      <Link to="/#home" className="block">
        <Avatar src={appIcon} />
      </Link>
      <Navigation
        className="!hidden md:!flex"
        items={navItems}
        gap={30}
        sm={{ gap: 20 }}
      />
      <Container
        padding={0}
        flexDisplay
        flexDirection="row"
        alignItems="center"
        gap={10}
      >
        <Button variant="secondary" prefix={<IoLogoGithub />}>
          GitHub
        </Button>
        <Navigation
          className="flex md:!hidden"
          items={navItems}
          gap={30}
          sm={{ gap: 20 }}
        />
      </Container>
    </Container>
  );
};

export default AppHeader;
