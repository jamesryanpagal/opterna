import AppHeader from "@/components/app-header";
import Container from "@/components/container";
import Profile from "./profile";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowUp } from "react-icons/io";
import { onScrollToAnchor } from "@/utils/helper";
import { useLocation } from "react-router-dom";
import AppFooter from "@/components/app-footer";

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  const locationHash = location.hash;

  useMotionValueEvent(scrollYProgress, "change", e => {
    setShowBackToTop(e >= 0.2);
  });

  useEffect(() => {
    onScrollToAnchor(locationHash.substring(1));
  }, [locationHash]);

  return (
    <>
      <Container padding="none" cornerRadius="none" flexDisplay>
        <Container cornerRadius="none" padding="none" className="w-full">
          <AppHeader />
          <Profile />
          <Skills />
          <Experience />
          <Projects />
        </Container>
      </Container>
      <AppFooter />
      {showBackToTop && (
        <Button
          variant="secondary"
          className="fixed bottom-5 right-3"
          prefix={<IoIosArrowUp />}
          size="icon"
          onClick={() => onScrollToAnchor("home")}
        />
      )}
    </>
  );
};

export default Home;
