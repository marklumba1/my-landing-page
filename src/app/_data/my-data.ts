import CardProps from "../_components/Card/Card.types";
import SectionProps from "../_components/Section/Section.type";

// ------------------
// Projects Section
// ------------------
export const projectsSection: SectionProps = {
  heading: "My Projects",
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
    pills: ["React", "Tailwind", "Framer Motion"],
    className: "bg-yellow-900",
    theme: "dark"
  },
  {
    heading: "Portfolio v2",
    description: "Redesigned portfolio site",
    alignment: "center",
    image: { src: "/images/portfolio-v2.png", alt: "Portfolio v2 modern interface" },
    link: "https://mark-lumba.netlify.app/",
    pills: ["React", "Tailwind", "Framer Motion"],
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
    pills: ["React", "Tailwind"],
    
  },
  {
    heading: "Jsontypecode",
    description: "JSON API frontend",
    className: "bg-green-900",
    alignment: "center",
      theme: "dark",
    link: "https://sample-jsontypecode.netlify.app/",
    image: { src: "/images/json.png", alt: "Sample JSONPlaceholder project interface" },
    pills: ["React", "Tailwind"],
  },
  {
    heading: "Shore Agents",
    description: "Responsive UI demo",
    className: "bg-lime-900",
    alignment: "center",
      theme: "dark",
    link: "https://shoreagents-demo.netlify.app/",
    image: { src: "/images/shoreagents.png", alt: "ShoreAgents demo project interface" },
    pills: ["JavaScript", "Tailwind"],
  },
  {
    heading: "Dotty",
    description: "Movie promo site",
    className: "bg-teal-900",
    alignment: "center",
    link: "https://dotty-app.netlify.app/",
    image: { src: "/images/dotty.png", alt: "Dotty App movie promotional site interface" },
    pills: ["JavaScript", "Tailwind"],
      theme: "dark"
  },
];


// ------------------
// Experience Section
// ------------------
export const experienceSection: SectionProps = {
  heading: "Experience",
  description: "A glimpse at some of the projects and roles I’ve taken on, from consulting gigs to government systems. Take a peek and see what I’ve been building!",
  theme: "light",
  alignment: "start",
  id: "experience",
  columns: 3
};

export const experiences: CardProps[] = [
  {
    heading: "Myridius",
    description: "AEM React Frontend",
    border: true,
    imageAsIcon: true,
    alignment: "center",
    image: { src: "/images/myridius.png", alt: "myridius icon" },
    pills: ["Adobe Experience Manager (AEM)", "React.js", "Agile"],
  },
  {
    heading: "Accenture",
    description: "Advanced App Engineering Sr Analyst",
    border: true,
     imageAsIcon: true,
    alignment: "center",
        image: { src: "/images/acn.png", alt: "acn icon" },
    pills: ["React.js", "Tailwind CSS", "Agile"],
  },
  {
    heading: "Jose B Lingad Memorial General Hospital",
    description: "Information System Analyst I",
    border: true,
     imageAsIcon: true,
    alignment: "center",
        image: { src: "/images/jbl.png", alt: "myridius icon" },
    pills: ["Vue", "React", "HTML5", "CSS", "Bootstrap", "MySQL", "PHP"],
  },
  {
    heading: "DICT Philippines",
    description: "Project Development Officer III",
    border: true,
        image: { src: "/images/dict.png", alt: "dict icon" },
             imageAsIcon: true,
                 alignment: "center",
    pills: ["CSS", "HTML", "JavaScript"],
  },
  {
    heading: "Jose B Lingad Memorial General Hospital",
    description: "Administrative Assistant I",
    border: true,
     imageAsIcon: true,
    alignment: "center",
      image: { src: "/images/jbl.png", alt: "jbl icon" },
    pills: ["Interpersonal Skills", "Leadership"],
  },
  {
    heading: "Accenture",
    description: "Associate Software Engineer",
    border: true,
     imageAsIcon: true,
    alignment: "center",
      image: { src: "/images/acn.png", alt: "acn icon" },
    pills: ["React.js", "JavaScript", "Functional Testing"],
  },
];

// ------------------
// Education Section
// ------------------
export const educationSection: SectionProps = {
  heading: "Education",
  className: "py-20 bg-slate-950",
  theme: "dark",
  alignment: "start",
  id: "education"
};

export const education: CardProps[] = [
  {
    heading: "Bachelor of Science Information Technology",
    description: "Mary the Queen College",
    className: "bg-sky-900",
    theme: "dark",
    pills: ["2014 - 2017"],
  },
  {
    heading: "ICT major in Programming",
    description: "Next Generation College",
    className: "bg-lime-900",
    theme: "dark",
    pills: ["2013 - 2014"],
  },
  {
    heading: "Certificate in Industrial Technology (Computer)",
    description: "Bulacan State University",
    className: "bg-yellow-900",
    theme: "dark",
    pills: ["2011 - 2013"],
  },
];