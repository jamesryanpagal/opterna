import { codingGif, projectIcon } from "@/assets";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { Text, Title } from "@/components/typography";
import { COLORS } from "@/utils/constants";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Container
      id="projects"
      padding={{ top: "md", bottom: "md" }}
      flexDisplay
      gap="lg"
      className="min-h-[100vh]"
    >
      <PageHeader
        title="Projects"
        icon={projectIcon}
        iconSize="full"
        description="My personal projects"
      />
      <Container
        className="flex-1 bg-center bg-no-repeat bg-cover px-5"
        padding="none"
        cornerRadius="none"
        flexDisplay
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.gunMetal}, ${COLORS.transparent}, ${COLORS.gunMetal}), url(${codingGif})`,
        }}
      >
        <Container
          className="backdrop-blur-sm bg-background/15"
          flexDisplay
          alignItems="center"
          justifyContent="center"
        >
          <Title level={2} className="text-center">
            My personal projects will be up soon! 🚀
          </Title>
          <Container
            padding="none"
            cornerRadius="none"
            flexDisplay
            alignItems="center"
            className="w-full sm:w-[80%]"
          >
            <Text className="text-center">
              Currently working on a new projects and re-working some of my old
              projects. So stay tuned!
            </Text>
            <Text className="text-center">
              For the mean time, you can check out my{" "}
              <Link
                to="https://github.com/jamesryanpagal"
                target="_blank"
                className="text-primary underline"
              >
                GitHub
              </Link>{" "}
              profile and repositories.
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Projects;
