import Hero from "./_components/Hero/Hero";
import heroData from "./_data/Hero.data";
import Section from "./_components/Section/Section";
import Card from "./_components/Card/Card";
import { education, educationSection, experiences, experienceSection, projects, projectsSection } from "./_data/my-data";

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
        <Section {...experienceSection}>
        {experiences.map((experience, index) => (
          <Card
            {...experience}
            key={index}
          />
        ))}
      </Section>
      <Section {...educationSection}>
        {education.map((course, index) => (
          <Card
            {...course}
            key={index}
          />
        ))}
      </Section>
    </div>
  );
};

export default HomePage;
