import { angularIcon, awsIcon, cssIcon, dockerIcon, expressJsIcon, firebaseIcon, githubActionsIcon, githubIcon, gitIcon, gitlabIcon, htmlIcon, javascriptIcon, mysqlIcon, nestJsIcon, nodeJsIcon, postgresqlIcon, prismaIcon, reactIcon, reactQueryIcon, reduxIcon, tailwindIcon, typescriptIcon } from "@/assets";
import type { NavigationProps } from "@/components/navigation";
import type { TimelineProps } from "@/pages/home/experience";

type Skill = {
  title: string;
  icon: string;
}

export type Skills = {
  label: string;
  skills: Skill[];
}

export const navItems: NavigationProps["items"] = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Skills",
    link: "#skills",
  },
  {
    label: "Experience",
    link: "#experience",
  },
  {
    label: "Projects",
    link: "#projects",
  },
];

export const experienceTimeline: TimelineProps[] = [
  {
    id: "1",
    date: ["March 2022", "July 2023"],
    address: "Taytay Rizal",
    title: "Full Stack Developer",
    employer: "Dynamic Global Soft. Inc.",
    descriptions: [
      `
      Developed Content Management System (CMS), to provide dynamic content or data for our other web
      and mobile applications. Built using React, Nodejs, Express.js and MySQL.
      `,
      `
      Developed web e-commerce for our clients to have full control over their products, franchisees,
      distributors and resellers. This includes applications of their vendors, monitoring of sales, vendors
      locations using google maps integration, vouchers and more. Built using React, Nodejs, Express.js and
      MySQL.
      `,
      `
      Developed delivery mobile application in addition to our client web e-commerce. This includes order
      monitoring and google maps integration. Built using Bare React Native.
      `,
      `
      Developed e-learning mobile application for grade school students to provide a more interactive and
      fun way of learning. Built using React Native Expo.
      `,
      `
      Developed 3D educational game in addition to our e-learning mobile application. Built using Unity
      Game Engine, C#.
      `,
      `
      Developed and maintained scalable RESTful APIs using Node.js and Express.js, enhancing application
      performance and supporting seamless communication between front-end and back-end services.
      Implemented robust authentication, authorization, and error-handling mechanisms, reducing security
      risks. Optimized database queries and middleware to decrease response time.
      `,
      `
      Created reusable, modular components to improve development efficiency and code maintainability.
      `,
      `
      Led a development team, delegating tasks and ensuring timely delivery.
      `,
      `
      Conducted thorough code reviews to maintain code quality and best practices.
      `,
    ],
  },
  {
    id: "2",
    date: ["July 2023", "July 2024"],
    address: "Pasig",
    title: "Full Stack Developer",
    employer: "ISBX Philippines",
    descriptions: [
      `
      Developed a cross-platform sports betting web and mobile application using React Native (Expo),
      ensuring a seamless user experience across devices. Implemented responsive and mobile-first design
      principles to optimize usability on both smartphones and tablets. Collaborated closely with project
      managers and designers to translate requirements and UI/UX designs into fully functional, high-quality
      features. Focused on performance, maintainability, and scalability while following best practices in
      React Native development.
      `,
      `
      Built reusable UI components to ensure scalability across multiple features.
      `,
      `
      Conducted regular code reviews to uphold development standards and ensure performance.
      `,
    ],
  },
  {
    id: "3",
    date: ["July 2024", "August 2025"],
    address: "Phoenix, Arizona",
    title: "Full Stack Developer",
    employer: "GR23Tech",
    descriptions: [
      `
      Developed Video Management and Editing Platform, enabling efficient uploading, editing, and
      publishing of video content for audiences. Implemented intuitive editing tools, responsive design, and
      seamless video processing workflows to support content creation and audience engagement.
      Collaborated closely with project manager and designers to ensure the platform met business
      requirements and enhanced the overall video management experience. Built using Angular with
      modular architecture.
      `,
      `
      Developed cross-platform disaster assistance applications, providing real-time alerts for incoming
      disasters. Enabled survivors to request essential resources such as food, water, and medical aid
      through integrated partner networks. Focused on building a responsive, user-friendly interface to
      ensure accessibility and timely support during emergency situations. Built using React, React Native,
      Nodejs, NestJs, Prisma, PostgreSQL.
      `,
      `
      Developed music streaming platform designed to help artists and record labels grow their audience
      and build their brand. Enabled artists to manage content, schedule concerts or events, and engage
      with fans through a seamless web and mobile experience. Focused on delivering responsive design,
      smooth playback, and efficient backend support to ensure high performance and scalability. Built
      using React, React Native, Nodejs, Express.js, Prisma, PostgreSQL.
      `,
      `
      Developed and maintained scalable RESTful APIs using Node.js, NestJs and Prisma, enhancing
      application performance and supporting seamless communication between front-end and back-end
      services. Implemented robust authentication, authorization, and error-handling mechanisms, reducing
      security risks. Optimized database queries and middleware to decrease response time.
      `,
      `
      Created reusable, modular components to improve development efficiency and code maintainability.
      `,
      `
      Deployed applications to both the Play Store and App Store.
      `,
      `
      Conducted thorough code reviews to maintain code quality and best practices.
      `,
      `
      Worked within a CI/CD-enabled environment to support efficient testing and deployment workflows.
      `,
      `
      Collaborated with cross-functional teams including designers, PMs, and QA to deliver high-quality
      software products on time.
      `,
    ],
  },
];

export const frontendSkills: Skill[] = [
  {
    title: "HTML",
    icon: htmlIcon
  },
  {
    title: "CSS",
    icon: cssIcon
  },
  {
    title: "Javascript",
    icon: javascriptIcon
  },
  {
    title: "Typescript",
    icon: typescriptIcon
  },
  {
    title: "React",
    icon: reactIcon
  },
  {
    title: "Angular",
    icon: angularIcon
  },
  {
    title: "React Query",
    icon: reactQueryIcon
  },
  {
    title: "Redux",
    icon: reduxIcon
  },
  {
    title: "Tailwind CSS",
    icon: tailwindIcon
  }
]

export const backendSkills: Skill[] = [
  {
    title: "Node.js",
    icon: nodeJsIcon
  },
  {
    title: "Express",
    icon: expressJsIcon
  },
  {
    title: "NestJs",
    icon: nestJsIcon
  },
  {
    title: "Prisma",
    icon: prismaIcon
  },
  {
    title: "MySQL",
    icon: mysqlIcon
  },
  {
    title: "PostgreSQL",
    icon: postgresqlIcon
  },
  {
    title: "Firebase",
    icon: firebaseIcon
  }
]

export const versionControlSkills: Skill[] = [
  {
    title: "Git",
    icon: gitIcon
  },
  {
    title: "GitHub",
    icon: githubIcon
  },
  {
    title: "GitLab",
    icon: gitlabIcon
  },
]

export const deploymentSkills: Skill[] = [
  {
    title: "AWS",
    icon: awsIcon
  },
  {
    title: "GitHub Actions",
    icon: githubActionsIcon
  },
  {
    title: "Docker",
    icon: dockerIcon
  }
]