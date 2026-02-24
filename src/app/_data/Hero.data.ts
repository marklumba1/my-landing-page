import HeroProps from "../_components/Hero/Hero.types";

const heroData: HeroProps = {
  headline: "Hey, I’m <span class=highlight>Mark Lumba</span>.",
  subheadline: "Here, you can see what I’m building and creating.",
  ctas: [
    { label: "View My Projects", type: "primary" },
    { label: "See a Live Demo", type: "secondary" },
  ],
  footer:
    "Delivered over 20+ front-end projects, creating maintainable components and interactive user experiences.",
  brands: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AEM"],
  className: "h-[100vh]",
  image: {
    src: "/images/me.jpg",
    alt: "me"
  }
};

export default heroData;
