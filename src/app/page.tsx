import Hero from "./_components/Hero/Hero";
import heroData from "./_data/Hero.data";
import Section from "./_components/Section/Section";
import Card from "./_components/Card/Card";
import {
  education,
  educationSection,
  experiences,
  experienceSection,
  projects,
  projectsSection,
  techStack,
  techStackSection,
} from "./_data/my-data";
import Timeline from "./_components/Timeline/Timeline";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Section id="home">
        <Hero {...heroData} />
      </Section>
      <Section {...projectsSection}>
        {projects.map((project, index) => (
          <Card {...project} key={index} />
        ))}
      </Section>
      <Section {...techStackSection}>
        {techStack.map((tech, index) => (
          <Card {...tech} key={index} />
        ))}
      </Section>
      <Section {...experienceSection}>
        <div className="hidden md:block">
          <Timeline cards={experiences} />
        </div>
        <div className="contents md:hidden">
  
          {experiences.map((experience, index) => (
            <Card {...experience} key={index} />
          ))}
        </div>
      </Section>
      <Section {...educationSection}>
        {education.map((course, index) => (
          <Card {...course} key={index} />
        ))}
      </Section>
    </div>
  );
};

export default HomePage;
