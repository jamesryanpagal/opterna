import {
  angularIcon,
  appStoreIcon,
  awsIcon,
  cssIcon,
  dockerIcon,
  expoIcon,
  expressJsIcon,
  firebaseIcon,
  githubActionsIcon,
  githubIcon,
  gitIcon,
  gitlabIcon,
  htmlIcon,
  javascriptIcon,
  mysqlIcon,
  nestJsIcon,
  nodeJsIcon,
  playStoreicon,
  postgresqlIcon,
  prismaIcon,
  reactIcon,
  reactQueryIcon,
  reduxIcon,
  rmdlandMobileContractImg,
  rmdlandThumbnailImg,
  rmdlandWebContractImg,
  rmdlandWebContractsImg,
  rmdlandWebEmailsImg,
  rmdlandWebPaymentBreakdownImg,
  rmdlandWebProjectImg,
  rmdlandWebProjectsImg,
  rmdlandWebReservations,
  shadcn,
  tailwindIcon,
  tanstack,
  typeorm,
  typescriptIcon,
} from "@/assets";
import type { NavigationProps } from "@/components/navigation";
import type { TimelineProps } from "@/pages/home/experience";
import { PLATFORM, type ProjectProps } from "@/pages/home/projects";

export type Skill = {
  title: string;
  icon: string;
};

export type Skills = {
  label: string;
  skills: Skill[];
};

export const projects: ProjectProps[] = [
  {
    id: "1",
    thumbnail: rmdlandThumbnailImg,
    images: [
      rmdlandWebContractImg,
      rmdlandWebContractsImg,
      rmdlandWebEmailsImg,
      rmdlandWebPaymentBreakdownImg,
      rmdlandWebProjectsImg,
      rmdlandWebProjectImg,
      rmdlandWebReservations,
      rmdlandMobileContractImg,
    ],
    title: "RMD Land",
    duration: ["May 2025", "Jan 2026"],
    summary: `
      Real estate management system with features for managing land projects and clients, monitoring
      client payments, sending automated daily email reminders, handling client contracts and payment
      breakdowns, and tracking and releasing agent commissions.
    `,
    technologies: [
      {
        title: "React",
        img: reactIcon,
      },
      {
        title: "React Query",
        img: reactQueryIcon,
      },
      {
        title: "Tailwind CSS",
        img: tailwindIcon,
      },
      {
        title: "Node.js",
        img: nodeJsIcon,
      },
      {
        title: "NestJs",
        img: nestJsIcon,
      },
      {
        title: "Prisma",
        img: prismaIcon,
      },
      {
        title: "PostgreSQL",
        img: postgresqlIcon,
      },
    ],
    platforms: [PLATFORM.WEB, PLATFORM.MOBILE],
  },
];

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
    date: ["November 6, 2025", "Present"],
    address: "Makati",
    role: "React Native Developer",
    employer: "Ascendion",
    descriptions: [
      `
      Maintained and enhanced a high-traffic banking mobile application by implementing new features and optimizing performance, resulting in a secure, seamless, and user-friendly mobile experience.
      `,
      `
      Collaborated with cross-functional development, product, and QA teams to design scalable solutions, ensuring 100% alignment with strict business and financial compliance requirements.
      `,
      `
      Resolved critical software bugs and application bottlenecks to significantly improve system reliability and minimize application downtime.
      `,
    ],
  },
  {
    id: "2",
    date: ["July 2024", "August 2025"],
    address: "Phoenix, Arizona",
    role: "Full Stack Developer",
    employer: "GR23Tech",
    descriptions: [
      `
      Engineered a modular Angular video management and editing platform to enable efficient content uploading, real-time editing, and seamless publishing for creators..
      `,
      `
      Implemented responsive editing tools and streamlined video processing workflows to optimize content creation pipelines and significantly boost audience engagement.
      `,
      `
      Partnered closely with project managers and UI/UX designers to ensure all platform features fully aligned with business requirements and delivered an enhanced user experience.
      `,
      `
      Developed cross-platform disaster assistance applications using React and React Native to deliver critical, real-time alerts for incoming emergency events.
      `,
      `
      Integrated partner networks into the application architecture, enabling disaster survivors to efficiently request essential resources like food, water, and medical aid.
      `,
      `
      Designed a highly responsive and intuitive user interface to guarantee accessibility and provide timely, reliable support during high-stress emergency situations.
      `,
      `
      Architected a robust backend utilizing Node.js, NestJS, Prisma, and PostgreSQL to ensure high availability and secure data handling during peak usage.
      `,
      `
      Created a full-stack music streaming platform using React, React Native, and Node.js to empower artists and record labels to scale their audiences and build their brands.
      `,
      `
      Built dedicated features for content management, event scheduling, and fan engagement to deliver a seamless and interactive web and mobile experience.
      `,
      `
      Optimized media playback and backend workflows via Express.js, Prisma, and PostgreSQL to ensure high-performance, low-latency streaming, and scalable growth.
      `,
      `
      Developed and maintained scalable RESTful APIs using NestJS and Prisma, improving application performance and facilitating seamless front-end to back-end communication.
      `,
      `
      Implemented robust authentication, authorization protocols, and error-handling mechanisms to mitigate security risks and protect user data.
      `,
      `
      Optimized complex database queries and middleware architecture to significantly decrease API response times and improve server efficiency.
      `,
      `
      Authored reusable, modular UI components to maximize development efficiency, minimize code duplication, and improve long-term codebase maintainability.
      `,
      `
      Managed the end-to-end deployment of cross-platform applications to the Google Play Store and Apple App Store, ensuring successful, compliant public releases.
      `,
      `
      Conducted thorough peer code reviews to enforce engineering best practices, maintain high code quality standards, and mentor team members.
      `,
      `
      Utilized automated CI/CD pipelines to support efficient testing workflows and achieve rapid, reliable software deployment cycles.
      `,
      `
      Collaborated within cross-functional teams (including designers, PMs, and QA) to consistently deliver high-quality software products ahead of strict deadlines.
      `,
    ],
  },
  {
    id: "3",
    date: ["July 2023", "July 2024"],
    address: "Pasig",
    role: "Full Stack Developer",
    employer: "ISBX Philippines",
    descriptions: [
      `
      Developed a cross-platform sports betting web and mobile application using React Native (Expo) to ensure a seamless, high-performance, and responsive user experience.
      `,
      `
      Collaborated with cross-functional teams using software development best practices to deliver scalable, high-quality, and easily maintainable application features.
      `,
      `
      Built modular and reusable UI components to maximize development efficiency and ensure seamless scalability across multiple app features.
      `,
      `
      Conducted thorough peer code reviews to uphold strict development standards and optimize overall application performance.
      `,
    ],
  },
  {
    id: "4",
    date: ["March 2022", "July 2023"],
    address: "Taytay Rizal",
    role: "Full Stack Developer",
    employer: "Dynamic Global Soft. Inc.",
    descriptions: [
      `
      Architected and developed a centralized Content Management System (CMS) using React, Node.js, Express.js, and MySQL to dynamically deliver real-time content and data across multiple web and mobile applications.
      `,
      `
      Created reusable, modular UI components and API structures to drastically improve development efficiency and ensure long-term code maintainability.
      `,
      `
      Engineered a comprehensive web e-commerce platform using React and Node.js/Express.js to empower clients with full operational control over products, franchisees, distributors, and resellers.
      `,
      `
      Integrated Google Maps API and advanced tracking workflows to enable real-time sales monitoring, vendor location tracking, and seamless voucher management.
      `,
      `
      Developed a companion delivery mobile application using Bare React Native, providing users with reliable order monitoring and real-time location tracking.
      `,
      `
      Optimized database queries and middleware within MySQL to decrease API response times and support heavy concurrent traffic from vendors and customers.
      `,
      `
      Developed an interactive e-learning mobile application using React Native (Expo) to provide grade school students with an engaging, responsive, and gamified learning environment.
      `,
      `
      Built and launched a companion 3D educational game using the Unity Game Engine and C# to deepen student engagement and deliver a highly interactive educational experience.
      `,
      `
      Led a cross-functional development team by strategically delegating tasks and managing timelines to consistently ensure the high-quality and timely delivery of software products.
      `,
      `
      Designed and maintained scalable RESTful APIs with robust authentication, authorization, and error-handling mechanisms to minimize security risks and protect sensitive user data.
      `,
      `
      Conducted thorough peer code reviews to enforce strict development standards, optimize application performance, and maintain exceptional code quality.
      `,
    ],
  },
];

export const frontendSkills: Skill[] = [
  {
    title: "HTML",
    icon: htmlIcon,
  },
  {
    title: "CSS",
    icon: cssIcon,
  },
  {
    title: "Javascript",
    icon: javascriptIcon,
  },
  {
    title: "Typescript",
    icon: typescriptIcon,
  },
  {
    title: "React",
    icon: reactIcon,
  },
  {
    title: "Angular",
    icon: angularIcon,
  },
  {
    title: "Tanstack ( Query & Router )",
    icon: tanstack,
  },
  {
    title: "Redux",
    icon: reduxIcon,
  },
  {
    title: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    title: "Shadcn",
    icon: shadcn,
  },
];

export const backendSkills: Skill[] = [
  {
    title: "Node.js",
    icon: nodeJsIcon,
  },
  {
    title: "Express",
    icon: expressJsIcon,
  },
  {
    title: "NestJS",
    icon: nestJsIcon,
  },
  {
    title: "Prisma",
    icon: prismaIcon,
  },
  {
    title: "TypeORM",
    icon: typeorm,
  },
  {
    title: "MySQL",
    icon: mysqlIcon,
  },
  {
    title: "PostgreSQL",
    icon: postgresqlIcon,
  },
  {
    title: "Firebase",
    icon: firebaseIcon,
  },
];

export const mobileSkills: Skill[] = [
  {
    title: "React Native",
    icon: reactIcon,
  },
  {
    title: "Expo",
    icon: expoIcon,
  },
  {
    title: "App Store Deployment",
    icon: appStoreIcon,
  },
  {
    title: "Play Store Deployment",
    icon: playStoreicon,
  },
];

export const versionControlSkills: Skill[] = [
  {
    title: "Git",
    icon: gitIcon,
  },
  {
    title: "GitHub",
    icon: githubIcon,
  },
  {
    title: "GitLab",
    icon: gitlabIcon,
  },
];

export const deploymentSkills: Skill[] = [
  {
    title: "Git",
    icon: gitIcon,
  },
  {
    title: "GitHub",
    icon: githubIcon,
  },
  {
    title: "GitLab",
    icon: gitlabIcon,
  },
  {
    title: "AWS",
    icon: awsIcon,
  },
  {
    title: "Docker",
    icon: dockerIcon,
  },
  {
    title: "GitHub Actions",
    icon: githubActionsIcon,
  },
];
