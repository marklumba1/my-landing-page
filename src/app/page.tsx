import Image from "next/image";
import Hero from "./_components/Hero/Hero";

import heroData from "./_components/Hero/Hero.data";
import Section from "./_components/Section/Section";
import {
  featureCards,
  featuredWorkSection,
} from "./_components/Section/FeaturedWork.data";
import FeatureCard from "./_components/FeatureCard/FeatureCard";

const HomePage: React.FC = () => {
  return (
    <div>
      <section id="home">
        <Hero {...heroData} />
      </section>
      <Section {...featuredWorkSection}>
        <div className="grid grid-cols-3 gap-10">
          {featureCards.map((card, index) => (
            <FeatureCard {...card} key={index}/>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
