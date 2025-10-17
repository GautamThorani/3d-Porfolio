import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fastapi,
  DA,
  OT,
  AQ,
  github,
  greencart,
  agency
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Fast Api",
    icon: fastapi,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Outlier ai",
    icon: OT,
    iconBg: "#383E56",
    date: "June 2023 - Oct 2023",
    points: [
      "Worked on coding projects supporting AI model training and evaluation.",
      "Developed and optimized solutions in JavaScript and Python.",
      "Implemented efficient algorithms and scripts to meet task requirements.",
      "Delivered high-quality code under strict accuracy and performance standards.",

    ],
  },
  {
    title: "Software Engineer",
    company_name: "Data Annotation",
    icon: DA,
    iconBg: "#E6DEDD",
    date: "March 2024 - Jan 2025",
    points: [
      "Wrote code to improve AI model accuracy and output quality.",
      "Developed logic and scripts in JavaScript and Python for model training and refinement.",
      "Optimized solutions to make AI responses more precise and reliable.",
      "Delivered high-quality work independently, meeting strict performance standards.",
    ],
  },
  {
    title: "Software Engineer - Bash",
    company_name: "AfterQuery Experts (YC 25)",
    icon: AQ,
    iconBg: "#383E56",
    date: "August 2025 - Present",
    points: [
      "Design and develop advanced terminal-based engineering tasks to train and benchmark AI models.",
      "Create complex troubleshooting scenarios involving DevOps, infra-repair, and real-world debugging workflows.",
      "Write and validate high-quality test suites and solutions using Docker, Bash, Python, and related tooling.",
      "Ensure strict technical and quality compliance, including reproducibility, determinism, and agent evaluation standards.",
    ],
  },
  {
    title: "Software Enginee",
    company_name: "GitHub",
    icon: github,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Present",
    points: [
      "Contributed to the open-source project cloud-init, focusing on improving its test suite.",
      "Migrated legacy unit tests to pytest, enhancing readability and maintainability.",
      "Submitted and merged 2 pull requests through GitHub.",
      "Followed open-source best practices, including code reviews and CI validation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "You have a rare talent for owning a product from concept to execution. The way you bring together complex systems and intuitive design is remarkable.",
    name: "Abhishek",
    designation: "Front-end Engineer",
    company: "AI Factor",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "You have a knack for building the complex logic that makes an application tick. The performance and reliability of your work are outstanding.",
    name: "Shuita",
    designation: "Software Engineer",
    company: "UBL Bank",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with you is a genuine pleasure. You bring a positive energy that elevates the whole team while consistently delivering outstanding work.",
    name: "Vishaka",
    designation: "RPA Developer",
    company: "Arcana",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Green Cart",
    description:
      "Web-based platform that allows users to search, browse, and purchase groceries from a digital storefront, providing a convenient and efficient solution for daily shopping needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "yellow-text-gradient",
      },
      {
        name: "express.js",
        color: "text-gray-600",
      },  
      {
        name: "tailwind",
        color: "teal-text-gradient",
      },
      {
        name: "stripe",
        color: "purple-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: greencart,
    source_code_link: "https://green-cart-9164.vercel.app/",
  },
  {
    name: "Agency AI",
    description:
      "Visually compelling and responsive frontend website for a marketing agency, designed to showcase services, client portfolios, and drive lead generation through an optimized user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "teal-text-gradient",
      },
      {
        name: "motion",
        color: "motion-text-gradient",
      },
      {
        name: "restapi",
        color: "rest-text-gradient",
      },
      {
        name: "responsive",
        color: "rest-text-gradient",
      },

    ],
    image: agency,
    source_code_link: "https://agency-hazel.vercel.app/",
  },
  {
    name: "AuthShield",
    description:
      "A full-stack security platform designed to strengthen account protection through Multi-Factor Authentication (MFA), allowing users to securely manage their authentication settings and access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "teal-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "teal-text-gradient",
      },
      {
        name: "material ui",
        color: "purple-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/GautamThorani/HINNGE",
  },
];

export { services, technologies, experiences, testimonials, projects };
