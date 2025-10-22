import { experienceIcon } from "@/assets";
import Card from "@/components/card";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experienceTimeline } from "@/utils/data";
import React from "react";

export type TimelineProps = {
  id: string;
  date: [string, string];
  address: string;
  title: string;
  employer: string;
  descriptions: string[];
};

const Timeline = ({ data }: { data: TimelineProps[] }) => {
  return data.map(({ id, date, title, address, employer, descriptions }, i) => {
    const index = i + 1;
    const isRight = !(index % 2);
    return (
      <Container
        key={id}
        cornerRadius="none"
        padding="none"
        flexDisplay
        flexDirection={isRight ? "row-reverse" : "row"}
        justifyContent="space-between"
        className="w-full"
        gap="none"
        sm={{
          flexDirection: "row-reverse",
          gap: "sm",
        }}
        md={{
          flexDirection: "row-reverse",
          gap: "sm",
        }}
      >
        <Card
          title={employer}
          description={address}
          header={
            <Container
              padding="none"
              cornerRadius="none"
              flexDisplay
              flexDirection="row"
              alignItems="center"
              gap="sm"
              sm={{
                flexDirection: "column",
                alignItems: "start",
                gap: "md",
              }}
            >
              <Container padding="none" cornerRadius="none" className="flex-1">
                <Title level={5}>{employer}</Title>
                <Text secondary>{address}</Text>
              </Container>
              <Badge variant="secondary" className="rounded-full lg:hidden">
                {title}
              </Badge>
            </Container>
          }
          className="flex-1 my-2 lg:my-0 lg:flex-none lg:w-[45%]"
        >
          <Container padding="none" cornerRadius="none">
            {descriptions.map((description, j) => {
              return (
                <React.Fragment key={j}>
                  {j !== 0 && <Separator className="my-4" />}
                  <Text>• {description}</Text>
                </React.Fragment>
              );
            })}
          </Container>
        </Card>
        <Container
          className="w-[50px] relative"
          padding="none"
          cornerRadius="none"
          flexDisplay
          flexDirection="row"
          justifyContent="center"
        >
          <Container
            padding="none"
            cornerRadius="none"
            className="w-[20%] h-full bg-dodger-blue"
          />
          <Container
            padding="none"
            cornerRadius="none"
            flexDisplay
            justifyContent="center"
            alignItems="center"
            className="w-[35px] h-[35px] rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white"
          >
            <Container className="w-[25px] h-[25px] rounded-full bg-dodger-blue" />
          </Container>
        </Container>
        <Container
          padding="none"
          cornerRadius="none"
          flexDisplay
          flexDirection="row"
          justifyContent={isRight ? "end" : "start"}
          alignItems="center"
          className="w-[45%] sm:px-5 hidden lg:flex"
        >
          <Container padding="none" cornerRadius="none">
            <Text secondary>
              {date[0]} - {date[1]}
            </Text>
            <Title level={5}>{title}</Title>
          </Container>
        </Container>
      </Container>
    );
  });
};

const Experience = () => {
  return (
    <Container
      id="experience"
      padding={{ top: "md", bottom: "md" }}
      flexDisplay
      gap="lg"
      className="min-h-[100vh]"
    >
      <PageHeader
        title="Experiences"
        icon={experienceIcon}
        description="Timeline of my Corporate and Freelance Experiences"
      />
      <Container cornerRadius="none" padding="none">
        <Timeline data={experienceTimeline} />
      </Container>
    </Container>
  );
};

export default Experience;
