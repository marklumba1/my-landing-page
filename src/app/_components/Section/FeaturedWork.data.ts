import { ContentBlockProps } from "@/app/_types/common.types";
import SectionProps from "./Section.type";
import FeatureCardProps from "../FeatureCard/FeatureCard.type";

export const featuredWorkSection: SectionProps = {
  heading: "Featured Work",
  description: "mark lumba",
  className: "py-20 bg-gray-900",
  theme: "dark",
  children: null,
  alignment: "center"
};

export const featureCards: FeatureCardProps[] = [
  {
    heading: "Weather App",
    description:
      "Real-time weather application",
    className: "bg-green-600",
    theme: "dark",
    image: {
      src: "/weather-app.png",
      alt: "React architecture illustration",
      width: 1000,
      height: 1000,
    },
    alignment: "center"
  },
  {
    heading: "AEM + Frontend Integration",
    description:
      "Developing accessible and performant components integrated with Adobe Experience Manager.",
    className: "bg-lime-500",
    theme: "dark",
    image: {
      src: "/portfolio-v2.png",
      alt: "AEM frontend integration preview",
      width: 1000,
      height: 1000,
    },
     alignment: "center"
  },
  {
    heading: "Performance & Accessibility",
    description:
      "Optimizing websites for speed, responsiveness, and WCAG accessibility standards.",
    className: "p-6 ",
    theme: "dark",
    image: {
      src: "/images/performance-accessibility.png",
      alt: "Website performance metrics dashboard",
      width: 600,
      height: 400,
    },
     alignment: "center"
  },
  
];