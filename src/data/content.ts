// All site content lives here. Edit text in one place without touching JSX.

export const profile = {
  name: "Naufal Syafi' Hakim",
  firstName: "Naufal",
  role: "Information Technology Student - Data Scientist Intern",
  location: "Surabaya, Indonesia",
  email: "naufalsyafi4@gmail.com",
  phone: "+6288806898411",
  linkedin: "https://www.linkedin.com/in/naufal-syafi-hakim",
  summary:
    "Final- year Information Technology student at Institut Teknologi Sepuluh Nopember with internship experience, organizational involvement, and experience as a teaching assistant. Has a solid foundation in programming and system thinking, with exposure to applied AI concepts. Adapts quickly to new tools and technologies, works effectively in team-based environments, and is motivated to further develop hands-on experience across software development and data-driven roles.",
  bio: [
    "Third-year Information Technology student at Institut Teknologi Sepuluh Nopember (ITS) with a solid foundation in programming, data analysis, and system thinking, plus hands-on exposure to applied AI concepts.",
    "I adapt quickly to new tools and technologies, work effectively in team-based environments, and I'm motivated to gain hands-on experience across software development and data-driven roles.",
  ],
};

export const cvUrl = "/resume.pdf";

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
    { value: "3.81", label: "GPA / 4.0", featured: true },
    { value: "5", label: "Work experiences" },
    { value: "2", label: "Organizational roles" },
    { value: "12+", label: "Projects" },
    { value: "20+", label: "Tech Stack" },
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
      "Built a real-time Live Tracker Dashboard Web Application with multi-layer GPS map rendering for salesforce positions, outlet geofences, GeoJSON 15+ cluster boundaries, one-week historical route replay, automated stop detection, and achievements tracking to reduce manual audit effort and enable faster performance visualization.",
      "Architected a high-throughput Django location ingestion API handling continuous GPS coordinates from 400+ devices with idempotent event processing, deduplication, and real-time geofence triggering.",
      "Designed and implemented an asynchronous geofencing worker using PostgreSQL as a durable job queue, achieving production p95 latency under 200ms and queue lag under 2 seconds.",
      "Engineered a React Native (Expo) Android app with persistent background GPS tracking, native Kotlin modules for mock-GPS detection and OS kill-resistance, and an offline-first location queue with 0% data loss during network outages.",
      "Built an end-to-end sales analytics platform for Telkomsel, featuring a custom ETL pipeline that parsed and reconciled 50,000+ monthly multi-source transaction records across national distribution channels.",
    ],
    techStack: ["Next.js 14", "TypeScript", "React Native", "Django 5", "PostgreSQL", "Leaflet.js", "Kotlin", "Virtual Private Server", "Laravel", "PHP"],
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
    description:
      "An internal real-time tracking platform for monitoring Salesforce positions and field activity through a geospatial dashboard. The system combines layered GPS maps, outlet geofences, GeoJSON boundaries, seven-day route replay, automated stop detection, and achievement tracking so teams can understand both current coverage and historical movement. Its supporting services handle continuous location ingestion, asynchronous geofence processing, and mobile background tracking with an offline-first queue for more resilient field data collection.",
    tags: ["Django", "Python", "PostgreSQL", "Next.js", "TypeScript", "React", "Leaflet.js"],
    image: "/photos/live-track-telkom.png",
    link: "#",
    sourcePrivate: true,
    category: "web",
    featured: true,
  },
  {
    title: "Telkomsel Postpaid Channel Performance",
    description:
    "The Postpaid Channel Performance & Sales Intelligence Platform is an enterprise web application designed to consolidate, normalize, and visualize large-scale commercial performance data across nationwide multi-tier distribution channels, including national retail chains, direct sales agencies, digital platforms, and walk-in service centers. Developed using Laravel 12 and a modern web stack, the system automates monthly reporting workflows through custom data-extraction bots for proprietary internal portals, an automated CAPTCHA-solving integration, an ETL pipeline reconciling 50,000+ monthly transaction records, fuzzy-matching algorithms for retailer alias normalization, and cross-platform JWT Single Sign-On (SSO). It delivers interactive analytics enabling executive and regional management to track revenue growth, target achievement rates, activation SLA turnaround times, and retail store productivity across granular geographic hierarchies.",
    tags: ["php", "Laravel", "Rest API", "JavaScript"],
    image: "/photos/postpaid-dashboard.png",
    link: "#",
    sourcePrivate: true,
    category: "web",
  },
  {
    title: "Film Recommendation Similarity System",
    description:
      "A comprehensive film recommendation system built as a Big Data final project to address large-scale catalog processing, real-time activity ingestion, personalization, and film discovery. A Kafka producer streams records from the film dataset into the pipeline, MinIO stores the streamed and batch data as S3-compatible object storage, and Apache Spark handles both real-time processing and batch machine-learning workflows, with model training scheduled every five minutes. The Dockerized architecture brings these services together with a Streamlit dashboard for monitoring ingestion and processing, browsing film posters and details, searching the catalog, and viewing model-generated recommendations.",
    tags: ["Apache PySpark", "MinIO", "Streamlit", "Apache Kafka", "Docker", "Python"],
    image: "/photos/big-data.png",
    link: "https://github.com/naufalhakims/bigdata-final-project",
    category: "data",
  },
  {
    title: "EDA on Employee Dataset",
    description:
      "A structured exploratory data analysis of an employee dataset, designed to turn raw workforce records into interpretable trends and relationships. The notebook uses Pandas for inspection and transformation, then combines Matplotlib and Seaborn visualizations with descriptive analysis to examine distributions, compare variables, and surface correlations that could guide later workforce or machine-learning work.",
    tags: ["Jupyter Notebook", "Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/modul-1",
    category: "data",
  },
  {
    title: "Classification and Regression on Estimated Delivery Time",
    description:
      "A supervised-learning study focused on estimating delivery time from the available order and delivery features. It frames the problem through both classification and regression perspectives, using Python and Pandas for preparation, visual analysis to understand the target, and comparative model evaluation to examine how different approaches handle delivery-time prediction. The notebook documents the path from data exploration to measurable predictive results.",
    tags: ["Jupyter Notebook", "Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/ai-modul-2",
    category: "data",
  },
  {
    title: "Unsupervised Learning on Economic Profile Countries Dataset",
    description:
      "An unsupervised-learning project that groups countries according to similarities in their economic profiles rather than relying on predefined labels. The workflow prepares and explores country-level indicators with Pandas and NumPy, applies scikit-learn clustering techniques, and visualizes the resulting segments with Matplotlib and Seaborn. The analysis makes it easier to compare development patterns and interpret which countries share similar economic characteristics.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/prak-3",
    category: "data",
  },
  {
    title: "Sign Language Model Predictor using CNN",
    description:
      "An image-classification project that uses a convolutional neural network to recognize sign-language gestures from visual input. The notebook covers the preparation and inspection of image data, the training of a model to distinguish gesture classes, and the evaluation of its predictions using Python’s data-science tooling. It demonstrates how computer vision can turn hand-sign imagery into a more accessible machine-readable signal.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    image: "https://www.mdpi.com/asi/asi-06-00035/article_deploy/html/images/asi-06-00035-g014.png",
    link: "https://www.kaggle.com/code/naufalhakim123/akseleratorgacor",
    category: "data",
  },
  {
    title: "Twitter Sentiment Analysis",
    description:
      "A natural-language-processing project that analyzes Twitter text and classifies each post into positive, negative, or neutral sentiment. The workflow prepares noisy short-form text for modeling, explores the distribution of sentiment in the dataset, and combines traditional Python analysis tools with NLTK and TensorFlow to build and assess a text-classification pipeline. The result is a practical example of extracting public opinion signals from social media language.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Seaborn", "NLTK", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/modul-5",
    category: "data",
  },
  {
    title: "Emotion Prediction Classification from Text",
    description:
      "A text-classification project that predicts the emotional category expressed in a piece of writing, including states such as happiness, sadness, and anger. It combines exploratory analysis and text preparation with numerical feature handling, visualization, and a PyTorch-based modeling workflow to learn patterns in language. The project focuses on the full path from raw text to an interpretable emotion prediction task.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "PyTorch"],
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=80",
    link: "https://www.kaggle.com/code/naufalhakim123/modul6-lastt",
    category: "data",
  },
  {
    title: "RAG Model for Question Answering",
    description:
      "A compact retrieval-augmented question-answering application that grounds generated responses in a provided context instead of relying only on a model’s general knowledge. The project uses SQLite to organize the local information, retrieves relevant context for a question, and sends that context through the Groq API before presenting the answer in a lightweight HTML interface. It demonstrates the core RAG loop in a small, understandable application rather than hiding the process behind a large framework.",
    tags: ["Python", "Groq API", "SQLite", "HTML"],
    image: "/photos/rag-project.png",
    link: "https://github.com/naufalhakims/rag-short-project",
    category: "data",
  },
  {
    title: "BisaKita Donation Web App",
    description:
      "A full-stack donation platform designed to support the complete campaign lifecycle for both contributors and administrators. Users can register, authenticate, browse campaigns, and contribute, while administrators can manage campaign content and operational data through protected flows. Built with Vue and TypeScript on the application side and MongoDB for persistence, the project also explores payment-gateway integration so a donation can move from discovery to checkout in one product experience.",
    tags: ["Vue.js", "TypeScript", "MongoDB", "Git"],
    image: "/photos/fp-pemweb.png",
    link: "https://github.com/naufalhakims/pweb-fp-P05-2024",
    category: "web",
  },
  {
    title: "HMIT Tuas Prakarsa Media and Information",
    description:
      "A visual communication system created for HMIT Tuas Prakarsa across posters, banners, and social-media posts. The work translates event and organizational information into a consistent set of layouts that can remain legible and recognizable across different formats, while keeping the campaign presence coherent on Instagram. Figma was used to develop and adapt the assets for publication through the HMIT ITS media channel.",
    tags: ["Figma", "Canva", "Adobe"],
    image: "/photos/hmit-tuas.png",
    link: "https://www.instagram.com/hmit_its/",
    category: "design",
  },
  {
    title: "A Renewal Agent 6.0 Design and Documentation",
    description:
      "A campaign design and documentation set for A Renewal Agent 6.0, covering promotional posters, banners, and social-media content. The project turns the event’s identity and communication needs into reusable visual assets, balancing hierarchy, consistency, and platform-specific sizing so the material works across both physical and digital touchpoints. The final designs were prepared in Figma and published through the event’s Instagram presence.",
    tags: ["Figma", "Canva", "Adobe"],
    image: "/photos/arawr.svg",
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
  wordmark: "let's connect!",
  email: "naufalsyafi4@gmail.com",
  linkedin: "linkedin.com/in/naufal-syafi-hakim",
  instagram: "https://www.instagram.com/nplhkm._/",
  github: "https://github.com/naufalhakims",
  location: "Surabaya, Indonesia",
  copyright: "(c) 2026 Naufal Syafi' Hakim. All rights reserved.",
};
