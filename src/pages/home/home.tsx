import AppHeader from "@/components/app-header";
import Container from "@/components/container";
import Profile from "./profile";
import Skills from "./skills";
import Experience from "./experience";

const Home = () => {
  return (
    <Container padding="none" cornerRadius="none" flexDisplay>
      <Container
        padding="none"
        cornerRadius="none"
        className="self-center w-[90%] md:w-[80%] lg:w-[60%]"
      >
        <AppHeader />
        <Profile />
        <Skills />
        <Experience />
      </Container>
    </Container>
  );
};

export default Home;
