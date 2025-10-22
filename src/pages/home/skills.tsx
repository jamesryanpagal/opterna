import {
  backendIcon,
  databaseIcon,
  deploymentIcon,
  frontendIcon,
  skillsIcon,
  versionControlIcon,
} from "@/assets";
import Avatar from "@/components/avatar";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { Text, Title } from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import {
  backendSkills,
  databaseSkills,
  deploymentSkills,
  frontendSkills,
  versionControlSkills,
} from "@/utils/data";
import React, { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import Card, { type CardProps } from "@/components/card";

type From = "left" | "right" | "bottom" | "top";

type SkillsCardProps = CardProps & {
  title: string;
  icon: string;
  skills: string[];
  from?: From;
};

const fromValue: Record<From, string> = {
  left: "-50px",
  right: "50px",
  top: "-50px",
  bottom: "50px",
};

const variants = (from: From, fromValue: string): Variants => ({
  hidden: {
    opacity: 0,
    [from === "left" || from === "right" ? "translateX" : "translateY"]:
      fromValue,
  },
  visible: {
    opacity: 1,
    [from === "left" || from === "right" ? "translateX" : "translateY"]: "0px",
  },
});

const SkillsCard = ({
  title,
  icon,
  skills,
  from = "left",
  className,
  ...rest
}: SkillsCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  return (
    <div ref={ref} className={`h-full ${className}`}>
      <motion.div
        variants={variants(from, fromValue[from])}
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-full"
      >
        <Card
          header={
            <Container
              flexDisplay
              flexDirection="row"
              alignItems="center"
              padding="none"
              className="gap-1"
            >
              <Avatar src={icon} size="sm" />
              <Title>{title}</Title>
            </Container>
          }
          className="h-full"
          {...rest}
        >
          <Container flexDisplay className="w-full gap-[16px] px-1.5">
            {skills.map((skill, i) => {
              return (
                <React.Fragment key={i}>
                  {i !== 0 && <Separator className="" />}
                  <Text>{skill}</Text>
                </React.Fragment>
              );
            })}
          </Container>
        </Card>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <Container
      padding={{ top: "md", bottom: "md" }}
      flexDisplay
      gap="lg"
      className="min-h-[100vh]"
    >
      <PageHeader
        title="Technical Skills"
        icon={skillsIcon}
        description="Languages, Libraries, Frameworks, Version Control and other tools for
          development"
      />
      <Container
        cornerRadius="none"
        padding="none"
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 overflow-hidden"
      >
        <SkillsCard
          title="Frontend"
          icon={frontendIcon}
          skills={frontendSkills}
          className="row-span-2"
          from="left"
        />
        <SkillsCard
          title="Backend"
          icon={backendIcon}
          skills={backendSkills}
          from="top"
        />
        <SkillsCard
          title="Database"
          icon={databaseIcon}
          skills={databaseSkills}
          from="right"
        />
        <SkillsCard
          title="Version Control"
          icon={versionControlIcon}
          skills={versionControlSkills}
          from="bottom"
        />
        <SkillsCard
          title="Deployment"
          icon={deploymentIcon}
          skills={deploymentSkills}
          from="bottom"
        />
      </Container>
    </Container>
  );
};

export default Skills;
