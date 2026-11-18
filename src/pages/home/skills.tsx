import { skillsIcon } from "@/assets";
import Container, { type ContainerProps } from "@/components/container";
import PageHeader from "@/components/page-header";
import { Text, TextSmall } from "@/components/typography";
import {
  backendSkills,
  deploymentSkills,
  frontendSkills,
  mobileSkills,
  type Skill,
} from "@/utils/data";
import { Globe, Rocket, Server, TabletSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";

type ListProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: Skill[];
  className?: ContainerProps["className"];
};

const List = ({ icon, title, description, skills, className }: ListProps) => {
  return (
    <Container
      cornerRadius="none"
      padding="lg"
      flexDisplay
      gap="lg"
      className={cn("flex-1 border-r border-lightened-dark-bg", className)}
    >
      <Container
        padding="none"
        flexDisplay
        flexDirection="row"
        alignItems="center"
      >
        {icon}
        <Text>{title}</Text>
      </Container>
      <Container padding="none">
        <Text secondary className="text-sm">
          {description}
        </Text>
      </Container>
      <Container
        padding="none"
        flexDisplay
        flexDirection="row"
        className="flex-wrap"
      >
        {skills.map(({ icon, title }) => {
          return (
            <Container
              key={title}
              flexDisplay
              flexDirection="row"
              alignItems="center"
              bordered
              className="border-lightened-dark-bg rounded-full"
              padding={{
                left: "md",
                right: "md",
                top: "sm",
                bottom: "sm",
              }}
            >
              <img src={icon} className="w-5 h-5 object-fill rounded-full" />
              <TextSmall>{title}</TextSmall>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

const Skills = () => {
  return (
    <Container
      id="skills"
      padding="none"
      className="border-b border-lightened-dark-bg"
      flexDisplay
      gap="none"
      cornerRadius="none"
    >
      <Container
        padding="none"
        cornerRadius="none"
        flexDisplay
        className="border-b border-lightened-dark-bg"
      >
        <Container
          padding="lg"
          cornerRadius="none"
          className="w-full md:w-[80%] lg:w-[65%] self-center border-l border-r border-lightened-dark-bg"
        >
          <PageHeader
            title="Technical Skills"
            icon={skillsIcon}
            description="Languages, libraries, frameworks, and cloud infrastructure engineered for scalable solutions."
          />
        </Container>
      </Container>
      <Container
        padding="none"
        flexDisplay
        cornerRadius="none"
        gap="none"
        className="min-h-[100vh] w-full md:w-[80%] lg:w-[65%] self-center border-l border-r border-lightened-dark-bg"
      >
        <Container
          padding="none"
          className="flex-1 border-b border-lightened-dark-bg"
          flexDisplay
          flexDirection="row"
          gap="none"
          cornerRadius="none"
        >
          <List
            icon={<Globe />}
            title="Frontend"
            description="Modern responsive architectures and interactive client interfaces."
            skills={frontendSkills}
          />
          <List
            icon={<Server />}
            title="Backend"
            description="Secure, performant RESTful APIs and database schemas."
            skills={backendSkills}
            className="border-r-0"
          />
        </Container>
        <Container
          padding="none"
          className="flex-1"
          flexDisplay
          flexDirection="row"
          gap="none"
          cornerRadius="none"
        >
          <List
            icon={<TabletSmartphone />}
            title="Mobile"
            description="Cross-platform mobile applications for iOS and Android."
            skills={mobileSkills}
          />
          <List
            icon={<Rocket />}
            title="DevOps & Tools"
            description="CI/CD workflows, containerization, and version management."
            skills={deploymentSkills}
            className="border-r-0"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Skills;
