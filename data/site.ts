// All portfolio content lives here. To add a section: add its data,
// create a component in src/components/sections, and add a nav link.

export type NavLink = { label: string; href: string };
export type Social = { label: string; href: string; icon: string };
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
export type Skill = { name: string; level: SkillLevel };
export type SkillGroup = { title: string; skills: Skill[] };
export type InfoCard = { title: string; icon: string; lines: string[] };

export const site = {
  name: "Aman Kumar",
  role: "MCA Graduate",
  title: "Aman Kumar - Portfolio",
  description:
    "Portfolio of Aman Kumar, MCA graduate with skills in C++, Java, Python, web development and databases.",
  email: "itsaman1626@gmail.com",
  cvPath: "/assets/AMAN_CV.pdf",
  heroImage: "/assets/amanpic.png",
  aboutImage: "/assets/aboutpic.png",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#profile" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
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
  cards: [
    {
      title: "Experience",
      icon: "/assets/experience.png",
      lines: ["Fresher", "Web Development"],
    },
    {
      title: "Education",
      icon: "/assets/education.png",
      lines: ["B.Sc. Computer Science", "MCA. Masters Degree"],
    },
  ] satisfies InfoCard[],
  text: "MCA graduate with expertise in programming languages (C++, Java, Python), web development, and database management. Strong problem-solving skills and a passion for delivering high quality software solutions.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Technical Skills",
    skills: [
      { name: "C/C++", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "JavaScript", level: "Beginner" },
      { name: "React JS", level: "Intermediate" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "MongoDB", level: "Beginner" },
      { name: "Node JS", level: "Beginner" },
    ],
  },
];
