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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Abhishek",
    designation: "Front-end Engineer",
    company: "AI Factor",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Shuita",
    designation: "Software Engineer",
    company: "UBL Bank",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vishaka",
    designation: "RPA Developer",
    company: "Arcana",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: greencart,
    source_code_link: "https://green-cart-9164.vercel.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: agency,
    source_code_link: "https://agency-hazel.vercel.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
