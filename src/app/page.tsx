import Image from "next/image";
import Hero from "./_components/Hero/Hero";

import heroData from "./_components/Hero/Hero.data";
const HomePage: React.FC = () => {
  return (
    <div>
      <section id="home">
        <Hero {...heroData}/>
      </section>
      <section id="aboutme">
      
      </section>
    </div>
  );
};

export default HomePage;
