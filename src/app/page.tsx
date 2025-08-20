import Hero from "./_components/Hero/Hero";
import Highlight from "./_components/Highlight/Highlight";
import { Shapes, Book } from "lucide-react";
import { cards, growthLevels, realtimeUpdates } from "./constants";
import Card from "./_components/Card/Card";
import Features from "./_components/Features/Features";
import Background from "./_components/Background/Background";
import TextHighlight from "./_components/Highlight/TextHighlight";
const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-40 py-24 px-10 md:px-20">
      <section>
        <Hero />
      </section>
      <section className="max-w-7xl mx-auto">
        <Highlight
          logo={<Shapes size={50} />}
          title={<p>Everything you need, all in <TextHighlight text="one place"/></p>}
          cta={{ label: "Get a demo", type: "secondary", icon: <Book /> }}
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card) => (
            <Card key={card.title.text} {...card} />
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <Features {...realtimeUpdates} />
      </section>
      <section className="max-w-7xl mx-auto">
        <Features {...growthLevels} reverse={true} />
      </section>
      <section className="max-w-7xl mx-auto">
        <Background>
          <Highlight
            title={<p>Less paperwork more <TextHighlight text="people work."/></p>}
            description="We integrate seamlessly with the tools you already use. Work smarter with Remote."
            cta={{ label: "See all integration", type: "primary" }}
          />
        </Background>
      </section>
         <section className="max-w-7xl mx-auto">
        <Background>
          <Highlight
            title={<p>Make <TextHighlight text="actionable"/> decisions simpler.</p>}
            description="Focus on what matters - let us handle the busywork while you build better relationships."
            cta={{ label: "Get a demo", type: "secondary", icon: <Book />}}
          />
        </Background>
      </section>
    </div>
  );
};

export default HomePage;
