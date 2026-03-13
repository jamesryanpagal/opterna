import { projectIcon } from "@/assets";
import Avatar from "@/components/avatar";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { Text, TextSmall, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Modal } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { projects } from "@/utils/data";
import { onToPascalCase } from "@/utils/helper";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const enum PLATFORM {
  WEB = "web",
  MOBILE = "mobile",
}

export type Technology = {
  title: string;
  img: string;
};

export type ProjectProps = {
  id: string;
  thumbnail: string;
  images: string[];
  title: string;
  summary: string;
  technologies: Technology[];
  platforms: PLATFORM[];
  duration: [string, string];
};

export type CarouselDirection = "next" | "prev";

const ProjectCard = ({
  thumbnail,
  title,
  summary,
  technologies,
  platforms,
  duration,
  images,
}: ProjectProps) => {
  const carouselIntervalRef = useRef<number | null>(null);
  const [toggleFullDescription, setToggleFullDescription] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [carouselDirection, setCarouselDirection] =
    useState<CarouselDirection>("next");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const clearCarouselInterval = useCallback(() => {
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    carouselIntervalRef.current = setInterval(() => {
      if (carouselDirection === "next") {
        if (!carouselApi.canScrollNext()) {
          setCarouselDirection("prev");
          return;
        }

        carouselApi.scrollNext();
      } else {
        if (!carouselApi.canScrollPrev()) {
          setCarouselDirection("next");
          return;
        }

        carouselApi.scrollPrev();
      }

      setCurrentSlideIndex(carouselApi.selectedScrollSnap());
    }, 3000);

    return () => {
      clearCarouselInterval();
    };
  }, [carouselApi, carouselDirection]);

  const renderFullDescription = useMemo(() => {
    return (
      <Modal
        title={title}
        description={summary}
        open={toggleFullDescription}
        closeOnEsc={false}
        closeOnClickOutside={false}
        onOpenChange={props => {
          clearCarouselInterval();
          setToggleFullDescription(props);
        }}
        className="lg:max-w-4xl"
      >
        <Container
          padding="none"
          className="h-[40vh] bg-card border-border/50 overflow-hidden"
        >
          <Carousel setApi={setCarouselApi}>
            <CarouselContent>
              {images.map((img, i) => {
                return (
                  <CarouselItem key={i}>
                    <Container padding="none" className="h-[40vh] w-full">
                      <img src={img} className="h-full w-full object-contain" />
                    </Container>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </Container>
        <Container
          flexDisplay
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          className="my-3"
        >
          {images.map((_, i) => {
            const isActive = currentSlideIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "h-3 w-3 rounded-full cursor-pointer border border-border/50 transition-all duration-500 ease-in-out",
                  isActive ? "w-5 bg-white" : "w-3 bg-accent",
                )}
                onClick={() => {
                  carouselApi?.scrollTo(i);
                  setCurrentSlideIndex(i);
                }}
              />
            );
          })}
        </Container>
        <Container padding="none" flexDisplay>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Duration</Text>
            <TextSmall>
              {duration[0]} - {duration[1]}
            </TextSmall>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Platforms</Text>
            <Container
              padding="none"
              flexDisplay
              flexDirection="row"
              alignItems="center"
              className="flex-wrap max-w-[300px] md:max-w-full"
            >
              {platforms.map(platform => {
                return (
                  <Badge variant="secondary" key={platform}>
                    {onToPascalCase(platform)}
                  </Badge>
                );
              })}
            </Container>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Technologies</Text>
            <Container
              padding="none"
              flexDisplay
              flexDirection="row"
              alignItems="center"
              className="flex-wrap max-w-[200px] md:max-w-full"
            >
              {technologies.map(({ img }, i) => {
                return <Avatar key={i} src={img} />;
              })}
            </Container>
          </Container>
          <Text className="text-md font-medium my-3">Core Features</Text>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Projects</Text>
            <Container padding="none" className="max-w-[200px] md:max-w-[70%]">
              <TextSmall>
                User can create projects, each project can have multiple phases,
                each phase can have multiple blocks, each block can have
                multiple lots. each lot can be own by only one client.
              </TextSmall>
            </Container>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Reservations</Text>
            <Container padding="none" className="max-w-[200px] md:max-w-[70%]">
              <TextSmall>
                A client can create a reservation for a lot. within the given
                validity period of the reservation, the client needs to pay down
                payment or full payment for the lot otherwise the reservation
                will be forfeited by the system admin. Giving a chance to other
                client to claim the lot.
              </TextSmall>
            </Container>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Contracts</Text>
            <Container padding="none" className="max-w-[200px] md:max-w-[70%]">
              <TextSmall>
                A contract will be generated after the client has paid the down
                payment or full payment for the lot. It contains the details of
                the lot, the client and the payment breakdown. The payment type
                can be down payment of full payment.
              </TextSmall>
            </Container>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Audit Trail</Text>
            <Container padding="none" className="max-w-[200px] md:max-w-[70%]">
              <TextSmall>
                Every action performed in the system will be logged and can be
                viewed by the system admin.
              </TextSmall>
            </Container>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Multiple User Role</Text>
            <Container padding="none" className="max-w-[200px] md:max-w-[70%]">
              <TextSmall>
                The system supports multiple user roles, each with different
                permissions. Admin has access to all features, while secretary
                has limited of full access depending on what the admin has
                granted.
              </TextSmall>
            </Container>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Requests</Text>
            <Container padding="none" className="max-w-[200px] md:max-w-[70%]">
              <TextSmall>
                Non admin users cannot perform a direct update or delete to a
                data. It will be sent to the admin for approval.
              </TextSmall>
            </Container>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">Agents & Commissions</Text>
            <Container padding="none" className="max-w-[200px] md:max-w-[70%]">
              <TextSmall>
                Agent can be created by the admin. Agent can be assigned to
                multiple projects. There will be commission breakdown for each
                agent based on the project and the lot.
              </TextSmall>
            </Container>
          </Container>
          <Container
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-accent/25 border-border/50 py-3 px-4"
            padding="none"
          >
            <Text className="text-md font-medium">
              Automated Email Reminders
            </Text>
            <Container padding="none" className="max-w-[200px] md:max-w-[70%]">
              <TextSmall>
                Client will receive automated email reminders for their upcoming
                and late payments. The email will be sent daily at 10:00 AM
                containing the details of the payment and possible penalties.
              </TextSmall>
            </Container>
          </Container>
        </Container>
      </Modal>
    );
  }, [toggleFullDescription, title, images, currentSlideIndex]);

  return (
    <>
      <Container
        bordered
        padding="md"
        cornerRadius="md"
        className="border-border/50 bg-card min-h-[430px] cursor-pointer"
        flexDisplay
        onClick={() => setToggleFullDescription(true)}
      >
        <Container padding="none" className="h-[200px] w-full overflow-hidden">
          <img src={thumbnail} className="h-full w-full object-cover" />
        </Container>
        <Container padding="none" gap="none" flexDisplay>
          <Container
            padding="none"
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Title level={4}>{title}</Title>
            <Container
              padding="none"
              flexDisplay
              flexDirection="row"
              alignItems="center"
            >
              {platforms.map((platform, i) => {
                return (
                  <Badge variant="secondary" key={i}>
                    {onToPascalCase(platform)}
                  </Badge>
                );
              })}
            </Container>
          </Container>
          <TextSmall className="text-foreground/70">
            {duration[0]} - {duration[1]}
          </TextSmall>
        </Container>
        <Container
          padding="none"
          flexDisplay
          flexDirection="row"
          alignItems="center"
          className="flex-wrap my-3"
        >
          {technologies.map(({ img }, i) => {
            return <Avatar key={i} src={img} />;
          })}
        </Container>
        <TextSmall className="text-foreground/70 line-clamp-3">
          {summary}
        </TextSmall>
      </Container>
      {renderFullDescription}
    </>
  );
};

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
      <TextSmall className="text-center italic text-atomic-tangerine">
        Note: Only projects that are publicly available and medium to large
        scale projects are shown here.
      </TextSmall>
      <Container
        padding="none"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map(project => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </Container>
    </Container>
  );
};

export default Projects;
