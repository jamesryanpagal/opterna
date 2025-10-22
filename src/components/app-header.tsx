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
    top: 0,
  },
  scrolled: {
    backgroundColor: applyTransparent(COLORS.dark, 0.65),
    height: "6vh",
    top: 5,
    padding: "0 10px",
    borderRadius: 100,
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
    <motion.div
      className="flex flex-row items-center justify-between sticky z-10"
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
          variant="secondary"
          prefix={<IoLogoGithub />}
          onClick={() => onOpenUrl("https://github.com/jamesryanpagal")}
        >
          GitHub
        </Button>
        <Navigation className="flex md:!hidden" items={navItems} />
      </Container>
    </motion.div>
  );
};

export default AppHeader;
