import { Link } from "react-router-dom";
import Container from "./container";
import Avatar from "./avatar";
import { appIcon } from "@/assets";
import Navigation from "./navigation";
import { navItems } from "@/utils/data";
import { Button } from "./ui/button";
import { IoLogoGithub } from "react-icons/io5";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "motion/react";
import { useState } from "react";
import { COLORS } from "@/utils/constants";
import { useWindowDimension } from "@/hooks/useWindowDimension";
import { applyTransparent } from "@/utils/applyTransparent";
import { onOpenUrl, onScrollToAnchor } from "@/utils/helper";

const headerVariants: Variants = {
  top: {
    backgroundColor: COLORS.gunMetal,
    height: "10vh",
  },
  scrolled: {
    backgroundColor: applyTransparent(COLORS.dark, 0.8),
    height: "6vh",
    // top: 5,
    // padding: "0 10px",
    // borderRadius: 100,
    backdropFilter: "blur(10px)",
  },
};

const AppHeader = () => {
  const { scrollYProgress } = useScroll();
  const [showScrolledMenu, setShowScrolledMenu] = useState(false);

  const { sm } = useWindowDimension();

  useMotionValueEvent(scrollYProgress, "change", e => {
    setShowScrolledMenu(e >= (sm ? 0.02 : 0.1));
  });

  return (
    <Container
      className="fixed top-0 left-0 w-full z-10 border-b border-lightened-dark-bg"
      cornerRadius="none"
      flexDisplay
      padding="none"
    >
      <motion.div
        className="flex flex-row items-center justify-between self-center w-full md:w-[80%] lg:w-[65%] p-7 border-l border-r border-lightened-dark-bg"
        variants={headerVariants}
        animate={showScrolledMenu ? "scrolled" : "top"}
        initial={"top"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Link
          to="/#home"
          onClick={() => onScrollToAnchor("home")}
          className="block"
        >
          <Avatar src={appIcon} />
        </Link>
        <Navigation className="!hidden md:!flex" items={navItems} />
        <Container
          flexDisplay
          flexDirection="row"
          alignItems="center"
          gap="sm"
          padding="none"
        >
          <Button
            prefix={<IoLogoGithub />}
            onClick={() => onOpenUrl("https://github.com/jamesryanpagal")}
          >
            GitHub
          </Button>
          <Navigation className="flex md:!hidden" items={navItems} />
        </Container>
      </motion.div>
    </Container>
  );
};

export default AppHeader;
