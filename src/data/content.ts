// All site content lives here. Edit text in one place without touching JSX.

export const profile = {
  name: "Naufal Hakim",
  firstName: "Naufal",
  role: "Information Technology Student - Data Scientist Intern",
  location: "Surabaya, Indonesia",
  email: "naufalsyafi4@gmail.com",
  phone: "+6288806898411",
  linkedin: "https://www.linkedin.com/in/naufal-syafi-hakim",
  summary:
    "I build apps that people love to use",
  bio: [
    "Third-year Information Technology student at Institut Teknologi Sepuluh Nopember (ITS) with a solid foundation in programming, data analysis, and system thinking, plus hands-on exposure to applied AI concepts.",
    "I adapt quickly to new tools and technologies, work effectively in team-based environments, and I'm motivated to gain hands-on experience across software development and data-driven roles.",
  ],
};

export const cvUrl = "/resume.pdf"; // TODO: drop your real resume PDF in /public as resume.pdf

export const heroPhoto = "/photos/naufal-selfie.jpeg";

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const tickerItems = [
  "Selamat datang",
  "Welcome",
  "Bienvenido",
  "أهلاً وسهلاً",
  "Willkommen",
  "ようこそ",
  "Bienvenue",
  "欢迎",
];

export const expertise = {
  headline: "About Me",
  filters: [],
  stats: [
    { value: "3.81/4.00", label: "GPA", featured: true },
    { value: "4", label: "Work experiences" },
    { value: "2", label: "Organizational roles" },
    { value: "12+", label: "Projects" },
    { value: "30+", label: "TechStack" },
    { value: "1x", label: "Finalist of Competition" },
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
  techStack?: string[];
}

export const experienceFilters: { key: ExperienceType | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "work", label: "Work" },
  { key: "organization", label: "Organization" },
];

export const experience: Experience[] = [
  {
    role: "Fullstack Developer Intern",
    org: "PT Telekomunikasi Selular (Telkomsel)",
    location: "Surabaya, Indonesia",
    period: "Jul 2026 - Present",
    type: "work",
    featured: true,
    points: [
      "Built a real-time Live Tracker Dashboard Web Application with multi-layer GPS map rendering for salesforce positions, outlet geofences, GeoJSON cluster boundaries, 7-day historical route replay, automated stop detection, and achievements tracking.",
      "Architected a high-throughput Django location ingestion API handling continuous GPS coordinates from 400+ devices with idempotent event processing, deduplication, and real-time geofence triggering.",
      "Designed and implemented an asynchronous geofencing worker using PostgreSQL as a durable job queue, achieving production p95 latency under 200ms and queue lag under 2 seconds.",
      "Engineered a React Native (Expo) Android app with persistent background GPS tracking, native Kotlin modules for mock-GPS detection and OS kill-resistance, and an offline-first location queue with zero data loss during network outages.",
    ],
    techStack: ["Next.js 14", "TypeScript", "React Native", "Django 5", "PostgreSQL", "Leaflet.js", "Kotlin", "Gunicorn", "Nginx", "PM2"],
  },
  {
    role: "Vice Head of Media & Information Department",
    org: "Himpunan Mahasiswa Teknologi Informasi ITS",
    location: "Surabaya, Indonesia",
    period: "Jan 2026 - Present",
    type: "organization",
    points: [
      "Conducted weekly design assistance sessions that significantly improved the quality and reach of organizational posts, contributing to 2,000+ engagements.",
    ],
  },
  {
    role: "Data Scientist Intern",
    org: "Social Economic Accelerator Lab",
    location: "Malang, Indonesia",
    period: "Feb 2026 - Jul 2026",
    type: "work",
    points: [
      "Developed a robust automated data ingestion pipeline using Python and Selenium to extract 6,000+ records from dynamic web sources.",
      "Implemented automated validation scripts to identify and prune 20% duplicate records and missing values for downstream analytics.",
      "Developed interactive Metabase dashboards integrated with a 5GB+ real dataset to support public data transparency.",
      "Automated geospatial validation for 4,800+ records with a multithreaded Python and Selenium scraper that cross-checks names, coordinates, and photo availability against Google Maps.",
    ],
    techStack: ["Python", "Selenium", "Metabase", "PostgreSQL", "Pandas", "NumPy"],
  },
  {
    role: "Media & Information Staff",
    org: "Himpunan Mahasiswa Teknologi Informasi ITS",
    location: "Surabaya, Indonesia",
    period: "Mar 2025 - Jan 2026",
    type: "organization",
    points: [
      "Created and published visual and written content for organizational social media, generating 4,000+ engagements and contributing to 1,500+ new followers.",
      "Designed promotional materials and social media assets using Figma, Canva, and Adobe tools, supporting campaign reach and visibility over 4,000+ likes.",
    ],
    techStack: ["Figma", "Canva", "Adobe"],
  },
  {
    role: "Assistant Lecturer of Law and Ethics of Information Technology",
    org: "Institut Teknologi Sepuluh Nopember",
    location: "Surabaya, Indonesia",
    period: "Sep 2025 - Dec 2025",
    type: "work",
    points: [
      "Provided structured feedback on student performance and handled grade-related inquiries while maintaining grade records in Excel, clarifying 90% of miscommunication between students.",
      "Filled in for 100% of lectures when the lecturer was unavailable to maintain class continuity.",
    ],
  },
  {
    role: "Project Officer of Basic Media Schooling HMIT ITS 2025",
    org: "Himpunan Mahasiswa Teknologi Informasi ITS",
    location: "Surabaya, Indonesia",
    period: "Sep 2025",
    type: "work",
    points: [
      "Led the end-to-end planning and execution of the training event through timeline management, task delegation, and team coordination, achieving 100% plan realization.",
      "Monitored progress with Spreadsheet and Notion, resolved on-site issues, and ensured the event met quality standards and an 80% attendance target.",
    ],
  },
  {
    role: "Database System Assistant Lecturer",
    org: "Institut Teknologi Sepuluh Nopember",
    location: "Surabaya, Indonesia",
    period: "Feb 2025 - Jun 2025",
    type: "work",
    points: [
      "Facilitated communication between the lecturer and students by clarifying course materials and guiding data-related tasks, including basic and advanced SQL concepts, earning 90% positive feedback.",
      "Assisted students with SQL queries and introductory database workflows during labs and group assignments, including MongoDB, helping 95% of the class score above the passing grade.",
    ],
    techStack: ["MySQL", "MongoDB"],
  },
];

export const projectFilters: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "data", label: "Data" },
  { key: "web", label: "Web" },
  { key: "design", label: "Design" },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  sourceCode?: string;
  sourcePrivate?: boolean;
  livePreview?: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Telkomsel Internal Salesforce Tracking Web Application",
    description: "A real-time salesforce location dashboard with geospatial visualization and historical route replay.",
    tags: ["Django", "Python", "PostgreSQL", "Next.js", "TypeScript", "React", "Leaflet.js"],
    image: "/photos/telkomsel-project.png",
    link: "#",
    sourcePrivate: true,
    category: "web",
    featured: true,
  },
  {
    title: "Film Recommendation Similarity System",
    description: "A web application that recommends similar films using a big-data implementation.",
    tags: ["Apache PySpark", "MinIO", "Streamlit", "Apache Kafka", "Docker", "Python"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/naufalhakims/bigdata-final-project",
    category: "data",
  },
  {
    title: "EDA on Employee Dataset",
    description: "An exploratory analysis of employee data to uncover trends and relationships between variables.",
    tags: ["Jupyter Notebook", "Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/modul-1",
    category: "data",
  },
  {
    title: "Classification and Regression on Estimated Delivery Time",
    description: "A supervised learning project that predicts estimated delivery time using classification and regression algorithms.",
    tags: ["Jupyter Notebook", "Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/ai-modul-2",
    category: "data",
  },
  {
    title: "Unsupervised Learning on Economic Profile Countries Dataset",
    description: "A clustering analysis of countries based on economic profiles to identify patterns and groupings.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/prak-3",
    category: "data",
  },
  {
    title: "Sign Language Model Predictor using CNN",
    description: "A convolutional neural network that predicts sign language gestures from images.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    image: "https://www.mdpi.com/asi/asi-06-00035/article_deploy/html/images/asi-06-00035-g014.png",
    link: "https://www.kaggle.com/code/naufalhakim123/akseleratorgacor",
    category: "data",
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "An NLP project that classifies tweets as positive, negative, or neutral.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Seaborn", "NLTK", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/modul-5",
    category: "data",
  },
  {
    title: "Emotion Prediction Classification from Text",
    description: "A machine learning model that classifies text into emotion categories such as happy, sad, and angry.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "PyTorch"],
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/modul6-lastt",
    category: "data",
  },
  {
    title: "RAG Model for Question Answering",
    description: "A retrieval-augmented generation model that combines information retrieval and generative modeling to answer questions from a given context.",
    tags: ["Python", "Groq API", "SQLite", "HTML"],
    image: "/photos/rag-project.png",
    link: "https://github.com/naufalhakims/rag-short-project",
    category: "data",
  },
  {
    title: "BisaKita Donation Web App",
    description: "A donation platform with admin and user authentication, campaign creation, payment gateway integration, and MongoDB storage.",
    tags: ["Vue.js", "TypeScript", "MongoDB", "Git"],
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=80",
    link: "https://github.com/naufalhakims/pweb-fp-P05-2024",
    category: "web",
  },
  {
    title: "HMIT Tuas Prakarsa Media and Information",
    description: "Poster, banner, and social media content designed for HMIT and shared through @hmit_its on Instagram.",
    tags: ["Figma"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.instagram.com/hmit_its/",
    category: "design",
  },
  {
    title: "A Renewal Agent 6.0 Design and Documentation",
    description: "Poster, banner, and social media content designed for A Renewal Agent 6.0 and shared through @ara_its on Instagram.",
    tags: ["Figma"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.instagram.com/ara_its/",
    category: "design",
  },
];

export const certifications = [
  { year: "2025", name: "Data Analysis using Python", issuer: "IBM" },
  { year: "2025", name: "Data Science Methodologies", issuer: "IBM" },
  { year: "2025", name: "Python for Data Science", issuer: "IBM" },
  { year: "2025", name: "LLM Guide for Developers: Basics to Practical Applications", issuer: "Udemy" },
  { year: "2025", name: "Advanced Training for Organizational Management", issuer: "HMIT ITS" },
  { year: "2026", name: "Associate Data Scientist", issuer: "Digitalent" },
  {year: "2026", name: "Data Science Competition Finalist", issuer: "Gammafest IPB University" },
];

export const education = {
  school: "Institut Teknologi Sepuluh Nopember",
  degree: "Bachelor of Information Technology",
  period: "2023 - 2027 (Expected)",
  location: "Surabaya, Indonesia",
};

export const aboutMePhoto = {
  src: "/photos/about.svg", // TODO: replace with your real grayscale portrait
  caption: "Naufal - IT Student & Data Scientist Intern, Surabaya",
};

export const footerContact = {
  wordmark: "LET'S TALK!",
  email: "naufalsyafi4@gmail.com",
  linkedin: "linkedin.com/in/naufal-syafi-hakim",
  instagram: "https://www.instagram.com/nplhkm._/",
  github: "https://github.com/naufalhakims",
  location: "Surabaya, Indonesia",
  copyright: "(c) 2026 Naufal Syafi' Hakim. All rights reserved.",
};
