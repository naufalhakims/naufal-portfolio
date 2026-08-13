// All site content lives here. Edit text in one place without touching JSX.

export const profile = {
  name: "NAUFAL SYAFI HAKIM",
  firstName: "NAUFAL",
  role: "Information Technology Student · Data Scientist Intern",
  location: "Surabaya, Indonesia",
  email: "naufalsyafi4@gmail.com",
  phone: "+6288806898411",
  linkedin: "https://www.linkedin.com/in/naufal-syafi-hakim",
  summary:
    "Third-year Information Technology student at Institut Teknologi Sepuluh Nopember (ITS) with hands-on experience in data pipelines, applied AI, and teaching. Based in Surabaya, Indonesia.",
  bio: [
    "Third-year Information Technology student at Institut Teknologi Sepuluh Nopember (ITS) with a solid foundation in programming, data analysis, and system thinking, plus hands-on exposure to applied AI concepts.",
    "I adapt quickly to new tools and technologies, work effectively in team-based environments, and I'm motivated to gain hands-on experience across software development and data-driven roles.",
  ],
};

export const cvUrl = "/resume.pdf"; // TODO: drop your real resume PDF in /public as resume.pdf

export const heroPhoto = "/photos/hero.svg"; // TODO: replace with a real grayscale portrait

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroSkills = ["Python", "SQL", "Selenium", "MongoDB", "Metabase", "Figma"];

export const tickerItems = [
  "Python",
  "SQL",
  "Selenium",
  "Metabase",
  "MongoDB",
  "Data Analysis",
  "Figma",
  "Canva",
];

export const expertise = {
  headline: "TECHNICAL EXPERTISE",
  filters: ["Data", "Development"],
  stats: [
    {
      value: "6,000+",
      label: "Records extracted via automated data pipeline",
    },
    {
      value: "3.75/4.00",
      label: "Current GPA at ITS",
      featured: true,
    },
    {
      value: "90%+",
      label: "Positive feedback as a Database Systems Assistant Lecturer",
    },
  ],
};

export type ExperienceType = "work" | "organization";

export interface Experience {
  role: string;
  org: string;
  location: string;
  period: string;
  type: ExperienceType;
  featured?: boolean;
  points: string[];
}

export const experienceFilters: { key: ExperienceType | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "work", label: "Work" },
  { key: "organization", label: "Organization" },
];

export const experience: Experience[] = [
  {
    role: "Data Scientist Intern",
    org: "Social Economic Accelerator Lab",
    location: "Surabaya",
    period: "Feb 2026 – Present",
    type: "work",
    featured: true,
    points: [
      "Built an automated data ingestion pipeline (Python + Selenium), extracting 6,000+ records from dynamic web sources.",
      "Built validation scripts that pruned 20% duplicate/missing records.",
      "Built interactive Metabase dashboards on a 5GB+ dataset for public transparency.",
    ],
  },
  {
    role: "Database System Assistant Lecturer",
    org: "Institut Teknologi Sepuluh Nopember",
    location: "Surabaya",
    period: "Feb – Jun 2025",
    type: "work",
    points: [
      "Taught SQL fundamentals and MongoDB basics; 90% positive feedback, 95% of class scored above passing grade.",
    ],
  },
  {
    role: "Assistant Lecturer, Law & Ethics of IT",
    org: "Institut Teknologi Sepuluh Nopember",
    location: "Surabaya",
    period: "Sep – Dec 2025",
    type: "work",
    points: [
      "Managed grading records in Excel, resolved 100% of grading miscommunications.",
      "Covered 100% of lectures when the primary lecturer was unavailable.",
    ],
  },
  {
    role: "Project Officer, Basic Media Schooling",
    org: "HMIT ITS",
    location: "Surabaya",
    period: "Sep 2025",
    type: "organization",
    points: [
      "Led end-to-end event planning and execution; 100% plan realization, 80%+ attendance target achieved.",
    ],
  },
  {
    role: "Media & Info Staff → Vice Head of Media & Info Dept",
    org: "HMIT ITS",
    location: "Surabaya",
    period: "Mar 2025 – Present",
    type: "organization",
    points: [
      "Produced content generating 4,000+ engagements and 1,500+ new followers.",
      "Designed campaign assets in Figma / Canva / Adobe.",
    ],
  },
];

export const projectFilters: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "data", label: "Data" },
  { key: "web", label: "Web" },
  { key: "tools", label: "Tools" },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  category: string;
  featured?: boolean;
}

// TODO: replace placeholders with real projects. Do not invent projects —
// fill in title/description/link below as your actual work exists.
export const projects: Project[] = [
  {
    title: "TODO — Project One",
    description:
      "TODO: one-line description of the project. Replace this placeholder text.",
    tags: ["TODO", "TODO"],
    image: "/photos/project-1.svg",
    link: "#", // TODO: real link (live demo or repo)
    category: "data",
  },
  {
    title: "TODO — Project Two",
    description:
      "TODO: one-line description of the project. Replace this placeholder text.",
    tags: ["TODO", "TODO"],
    image: "/photos/project-2.svg",
    link: "#", // TODO: real link (live demo or repo)
    category: "web",
  },
  {
    title: "TODO — Project Three",
    description:
      "TODO: one-line description of the project. Replace this placeholder text.",
    tags: ["TODO", "TODO"],
    image: "/photos/project-3.svg",
    link: "#", // TODO: real link (live demo or repo)
    category: "tools",
    featured: true,
  },
];

export const certifications = [
  { year: "2025", name: "Data Analysis using Python", issuer: "IBM" },
  { year: "2025", name: "Data Science Methodologies", issuer: "IBM" },
  { year: "2025", name: "Python for Data Science", issuer: "IBM" },
  { year: "2025", name: "LLM Guide for Developers: Basics to Practical Applications", issuer: "Udemy" },
  { year: "2025", name: "Advanced Training for Organizational Management", issuer: "HMIT ITS" },
];

export const education = {
  school: "Institut Teknologi Sepuluh Nopember",
  degree: "Bachelor of Information Technology",
  period: "Aug 2023 – Aug 2027 (Expected)",
  gpa: "3.75/4.00",
  location: "Surabaya, Indonesia",
};

export const aboutMePhoto = {
  src: "/photos/about.svg", // TODO: replace with your real grayscale portrait
  caption: "Naufal — IT Student & Data Scientist Intern, Surabaya",
};

export const footerNav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const footerContact = {
  wordmark: "LET'S TALK",
  phone: "+6288806898411",
  email: "naufalsyafi4@gmail.com",
  linkedin: "linkedin.com/in/naufal-syafi-hakim",
  location: "Surabaya, Indonesia",
  copyright: "© 2026 Naufal Syafi' Hakim. All rights reserved.",
};
