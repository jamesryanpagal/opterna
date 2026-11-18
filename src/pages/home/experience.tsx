import { experienceIcon } from "@/assets";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { Text, Title } from "@/components/typography";
import { cn } from "@/lib/utils";
import { experienceTimeline } from "@/utils/data";
import { Calendar, MapPin } from "lucide-react";

export type TimelineProps = {
  id: string;
  date: [string, string];
  address: string;
  role: string;
  employer: string;
  descriptions: string[];
};

const Experience = () => {
  return (
    <Container
      id="experience"
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
            title="Experiences"
            icon={experienceIcon}
            description="Timeline of my corporate and freelance experiences."
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
        <Container cornerRadius="none" padding="none" flexDisplay gap="none">
          {experienceTimeline.map(
            ({ id, date, address, role, employer, descriptions }, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <Container
                  key={id}
                  padding="lg"
                  flexDisplay
                  cornerRadius="none"
                  gap="md"
                  className={cn(
                    "border-b border-lightened-dark-bg",
                    isLast && "border-b-0",
                  )}
                >
                  <Container
                    padding="none"
                    flexDisplay
                    flexDirection="row"
                    alignItems="start"
                    justifyContent="space-between"
                  >
                    <Container padding="none">
                      <Title>{employer}</Title>
                      <Text className="text-medium-torquoise">{role}</Text>
                    </Container>
                    <Container
                      padding="none"
                      flexDisplay
                      flexDirection="row"
                      alignItems="center"
                      gap="sm"
                    >
                      <Calendar size={16} />
                      <Text>
                        {date[0]} - {date[1]}
                      </Text>
                    </Container>
                  </Container>
                  <Container
                    padding="none"
                    flexDisplay
                    flexDirection="row"
                    alignItems="center"
                    gap="sm"
                  >
                    <MapPin size={16} />
                    <Text>{address}</Text>
                  </Container>
                  <Container padding="none" flexDisplay gap="md">
                    {descriptions.map((description, i) => {
                      return (
                        <Container
                          key={i}
                          cornerRadius="none"
                          className="border-l-4 border-lightened-dark-bg"
                        >
                          <Text>{description}</Text>
                        </Container>
                      );
                    })}
                  </Container>
                </Container>
              );
            },
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default Experience;
