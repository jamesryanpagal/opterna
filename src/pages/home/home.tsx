import AppHeader from "@/components/app-header";
import Container from "@/components/container";
import Profile from "./profile";

const Home = () => {
  return (
    <Container cornerRadius={0} flexDisplay padding={0}>
      <Container
        padding={0}
        cornerRadius={0}
        className="self-center w-[90%] md:w-[80%] lg:w-[60%]"
      >
        <AppHeader />
        <Profile />
      </Container>
    </Container>
  );
};

export default Home;
