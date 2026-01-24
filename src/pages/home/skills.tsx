import {
  skillsIcon,
} from "@/assets";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { TextSmall, Title } from "@/components/typography";
import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { backendSkills, deploymentSkills, frontendSkills, versionControlSkills, type Skills as SkillsProps } from "@/utils/data";

const SkillList = ({ label, skills }: SkillsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" })

  const variants: Variants = {
    hidden: {
      opacity: 0,
      translateX: -50,
    },
    visible: {
      opacity: 1,
      translateX: 0
    }
  }

  return (
    <div ref={ref}>
      <motion.div className="flex flex-col p-0 gap-0" variants={variants} animate={isInView ? "visible" : "hidden"} transition={{ duration: 0.3, ease: "easeInOut" }}>
        <Container padding="none" className="bg-card border border-border/50 border-b-transparent rounded-bl-none rounded-br-none w-[170px] py-1 px-2.5">
          <Title level={5}>{label}</Title>
        </Container>
        <Container bordered flexDisplay gap="none" padding="none" className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-5 bg-card rounded-tl-none border-border/50 py-5">
          {
            skills.map(({ title, icon }) => {
              return (
                <Container key={title} padding="none" flexDisplay gap="sm" justifyContent="center" alignItems="center">
                  <Container padding="none" flexDisplay gap="sm" justifyContent="center" alignItems="center" className="w-[50px] h-[50px]">
                    <img src={icon} className="w-full h-full object-fill" />
                  </Container>
                  <TextSmall>{title}</TextSmall>
                </Container>
              )
            })
          }
        </Container>
      </motion.div>
    </div>
  )
}

const Skills = () => {
  return (
    <Container
      id="skills"
      padding={{ top: "md", bottom: "md" }}
      flexDisplay
      justifyContent="center"
      gap="lg"
      className="min-h-[100vh]"
    >
      <PageHeader
        title="Technical Skills"
        icon={skillsIcon}
        description="Languages, Libraries, Frameworks, Version Control and other tools for
          development"
      />
      <SkillList label="Frontend" skills={frontendSkills} />
      <SkillList label="Backend" skills={backendSkills} />
      <SkillList label="Version Control" skills={versionControlSkills} />
      <SkillList label="Deployment" skills={deploymentSkills} />
    </Container>
  );
};

export default Skills;
