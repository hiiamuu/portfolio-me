// All portfolio content lives here. To add a section: add its data,
// create a component in components/sections, and add a nav link.

export type NavLink = { label: string; href: string };
export type Social = { label: string; href: string; icon: string };
export type InfoCard = { title: string; icon: string; lines: string[] };
export type SkillIcon = "frontend" | "backend" | "ai" | "database" | "devops" | "other";
export type SkillGroup = { title: string; icon: SkillIcon; skills: string[] };
export type Highlight = { label: string; text: string };
export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: Highlight[];
};
export type Project = { title: string; tech: string[]; description: string };

export const site = {
  name: "Aman Kumar",
  role: "Frontend Lead | Full Stack Developer",
  specialty: "Next.js & React Specialist",
  title: "Aman Kumar - Frontend Lead & Full Stack Developer",
  // Joined Deeshaa in July 2023. "N+ years" text is calculated from this.
  careerStart: { year: 2023, month: 7 },
  description: (years: number) =>
    `Frontend Lead and Full Stack Developer with ${years}+ years of experience building scalable web applications using Next.js, React, and Node.js.`,
  email: "itsaman1626@gmail.com",
  location: "Bokaro, Jharkhand",
};

export type Stat = { value: string; label: string };

export const hero = {
  intro:
    "I build fast, scalable web applications with Next.js, React and Node.js, and lead frontend teams from planning to production.",
  stats: (years: number): Stat[] => [
    { value: `${years}+`, label: "Years Experience" },
    { value: "5", label: "Projects Delivered" },
    { value: "3", label: "MVPs Shipped" },
    { value: "5+", label: "Juniors Mentored" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#profile" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aman1626/",
    icon: "/assets/linkedin.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/hiiamuu",
    icon: "/assets/github.png",
  },
];

export const about = {
  cards: (years: number): InfoCard[] => [
    {
      title: "Experience",
      icon: "/assets/experience.png",
      lines: [`${years}+ Years`, "Frontend Lead & Full Stack"],
    },
    {
      title: "Education",
      icon: "/assets/education.png",
      lines: ["MCA (CGPA: 8.82)", "B.Sc. Computer Science"],
    },
  ],
  summary: (years: number) =>
    `Frontend Lead and Full Stack Developer with ${years}+ years of experience building scalable web applications using Next.js, React, and Node.js. MCA graduate (CGPA: 8.82) with a track record of delivering 5 projects including 3 MVPs, leading frontend teams, and mentoring junior developers. Proficient in AI-assisted development — prompt engineering, GPT-4 integration, and GitHub Copilot — to accelerate delivery and improve code quality.`,
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: [
      "Next.js (App Router)",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Next.js API Routes", "REST APIs", "JWT Authentication"],
  },
  {
    title: "AI & Prompt Engineering",
    icon: "ai",
    skills: [
      "Prompt Engineering",
      "GPT-4 / LLM Integration",
      "GitHub Copilot",
      "AI Workflow Automation",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MySQL", "PostgreSQL", "Cassandra (CQL)"],
  },
  {
    title: "DevOps & Tools",
    icon: "devops",
    skills: ["Git", "GitHub", "GitLab", "CI/CD Pipelines (Basics)", "Docker (Basics)", "Postman"],
  },
  {
    title: "Other",
    icon: "other",
    skills: ["C/C++", "Java", "Python", "Windows", "Linux"],
  },
];

export const jobs: Job[] = [
  {
    role: "Frontend Lead & Full Stack Developer",
    company: "Deeshaa Limited (Baseel Partners LLP)",
    location: "London, UK (Remote)",
    period: "July 2023 – Present",
    highlights: [
      {
        label: "Project Leadership",
        text: "Led frontend development across 5 projects as Frontend Lead; delivered 3 MVPs from planning to production deployment.",
      },
      {
        label: "Full Stack Development",
        text: "Built full stack applications using Next.js and Node.js with clean architecture and reusable component libraries.",
      },
      {
        label: "AI-Assisted Development",
        text: "Applied prompt engineering and GitHub Copilot for code generation and debugging; integrated OpenAI APIs for AI-driven product features.",
      },
      {
        label: "Performance Optimisation",
        text: "Improved Core Web Vitals by implementing lazy loading, code splitting, and SSR with Next.js.",
      },
      {
        label: "API & Integration",
        text: "Designed and consumed REST APIs with JWT authentication; integrated third-party services with robust error handling.",
      },
      {
        label: "Code Quality & Mentorship",
        text: "Conducted code reviews, enforced standards, and mentored 5+ interns/juniors through pair programming and technical sessions.",
      },
      {
        label: "UI/UX Implementation",
        text: "Translated Figma designs into responsive, accessible interfaces using React, Tailwind CSS, and TypeScript.",
      },
      {
        label: "CI/CD & Version Control",
        text: "Managed Git workflows and contributed to CI/CD pipeline setup using GitLab.",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Admin Dashboard",
    tech: ["React.js"],
    description: "Feature-rich dashboard with dynamic data visualisation and role-based access control.",
  },
  {
    title: "Student Management System",
    tech: ["Node.js", "Cassandra (CQL)"],
    description: "Backend system using Node.js and Cassandra for large-scale student record management.",
  },
  {
    title: "MERN CRUD Application",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    description: "Full-stack app using MongoDB, Express, React, and Node.js with RESTful API design.",
  },
  {
    title: "Loan Eligibility System",
    tech: ["Python", "scikit-learn"],
    description: "Predictive machine learning model for loan assessment using scikit-learn.",
  },
  {
    title: "Portfolio Website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "Responsive personal portfolio website.",
  },
  {
    title: "Weather App",
    tech: ["Python", "Tkinter"],
    description: "Desktop GUI application integrating a live weather API.",
  },
];
