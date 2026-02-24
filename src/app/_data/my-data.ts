import CardProps from "../_components/Card/Card.types";
import SectionProps from "../_components/Section/Section.type";

// ------------------
// Projects Section
// ------------------
export const projectsSection: SectionProps = {
  heading: "Featured Projects",
  description: "A collection of personal projects where I’ve explored ideas, solved problems, and sharpened my craft. See what I’ve been building.",
  alignment: "center",
  id: "projects",
  columns: 3,
  className: "bg-slate-950",
  theme: "dark"
};

export const projects: CardProps[] = [
  {
    heading: "Weather App",
    description: "Real-time weather app",
    alignment: "center",
    image: { src: "/images/weather-app.png", alt: "Weather Mok App interface showing current conditions and forecast" },
    link: "https://weather-mok.netlify.app/",
    className: "bg-yellow-900",
    theme: "dark"
  },
  {
    heading: "Portfolio v2",
    description: "Redesigned portfolio site",
    alignment: "center",
    image: { src: "/images/portfolio-v2.png", alt: "Portfolio v2 modern interface" },
    link: "https://mark-lumba.netlify.app/",
    className: "bg-indigo-900",
      theme: "dark"
  },
  {
    heading: "Portfolio v1",
    description: "First portfolio version",
    className: "bg-cyan-900",
    alignment: "center",
    theme: "dark",
    image: { src: "/images/portfolio-v1.png", alt: "Screenshot of Portfolio v1 homepage layout" },
    link: "https://mark-lumba.netlify.app/",
    
  }
];

// ------------------
// Techstack Section
// ------------------
export const techStackSection: SectionProps = {
  heading: "Tech Stack",
  description: "The technologies and tools I use to build scalable and maintainable applications.",
  alignment: "center",
  id: "tech-stack",
  columns: 3,
};

export const techStack: CardProps[] = [
  {
    heading: "React",
    description: "Frontend Library",
    alignment: "center",
    imageAsIcon: true,
    link: "https://reactjs.org/",
    border: true
  },
  {
    heading: "Next.js",
    description: "React Framework",
    alignment: "center",
    imageAsIcon: true,
    link: "https://nextjs.org/",
    border: true
  },
  {
    heading: "TypeScript",
    description: "Typed JavaScript",
    alignment: "center",
    imageAsIcon: true,
    link: "https://www.typescriptlang.org/",
    border: true
  },
  {
    heading: "Tailwind CSS",
    description: "Utility-first CSS",
    alignment: "center",
    imageAsIcon: true,
    link: "https://tailwindcss.com/",
    border: true
  },
  {
    heading: "JavaScript",
    description: "Programming Language",
    alignment: "center",
    imageAsIcon: true,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    border: true
  },
  {
    heading: "Framer Motion",
    description: "Animations",
    alignment: "center",
    imageAsIcon: true,
    link: "https://www.framer.com/motion/",
    border: true
  },
];


// ------------------
// Experience Section
// ------------------
export const experienceSection: SectionProps = {
  heading: "Experience",
  theme: "dark",
  className: "bg-slate-950",
  alignment: "start",
  id: "experience",
  columns: 1
};

export const experiences: CardProps[] = [
  {
    heading: "Myridius",
    description: "AEM React Developer",
    pills: ["2024 – Present"],
    className: "hover:bg-cyan-800 border-cyan-800",
    headingClass: "group-hover:text-slate-950",
    border: true,
    theme: "dark",
  },
  {
    heading: "Accenture",
    description: "Advanced App Engineering Sr Analyst",
    pills: ["2023 – 2024"],
    className: "bg-indigo-800",
    theme: "dark",
  },
  {
    heading: "Jose B. Lingad Memorial General Hospital",
    description: "Information System Analyst I",
    pills: ["2022 – 2023"],
    className: "bg-emerald-800",
    theme: "dark",
  },
  {
    heading: "DICT Philippines",
    description: "Project Development Officer III",
    pills: ["2021 – 2022"],
    className: "bg-orange-800",
    theme: "dark",
  },
  {
    heading: "Accenture",
    description: "Associate Software Engineer",
    pills: ["2017 – 2018"],
    className: "bg-pink-800",
    theme: "dark",
  },
];

// ------------------
// Education Section
// ------------------
export const educationSection: SectionProps = {
  heading: "Education",
  description: "My formal education and certifications that shaped my technical skills.",
  alignment: "start",
  id: "education"
};

export const education: CardProps[] = [
  {
    heading: "Bachelor of Science Information Technology",
    description: "Mary the Queen College",
    className: "!border-sky-900 text-sky-900 hover:bg-sky-900 hover:text-white",
    pills: ["2014 - 2017"],
    border: true
  },
  {
    heading: "ICT major in Programming",
    description: "Next Generation College",
    className: "!border-lime-900 text-lime-900 hover:bg-lime-900 hover:text-white",
    border: true,
    pills: ["2013 - 2014"],
  },
  {
    heading: "Certificate in Industrial Technology (Computer)",
    description: "Bulacan State University",
    className: "!border-yellow-900 text-yellow-900 hover:bg-yellow-900 hover:text-white",
    border: true,
    pills: ["2011 - 2013"],
  },
];