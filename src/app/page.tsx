import Hero from "./_components/Hero/Hero";
import Highlight from "./_components/Highlight/Highlight";
import { Shapes, Book } from "lucide-react";
import { cards, growthLevels, realtimeUpdates } from "./constants";
import Card from "./_components/Card/Card";
import Features from "./_components/Features/Features";
const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 py-24 px-2">
      <section>
        <Hero />
      </section>
      <section className="max-w-7xl mx-auto">
        <Highlight
          logo={Shapes}
          title="Everything you need, all in"
          textHighlight="one place"
          cta={{ label: "Get a demo", type: "secondary", icon: Book }}
        />
      </section>
      <section className="grid grid-cols-2 xl:flex gap-5 max-w-7xl mx-auto">
        {cards.map(card => <Card key={card.title.text} {...card}/>)}
      </section>
      <section className="max-w-7xl mx-auto">
        <Features {...realtimeUpdates} />
      </section>
      <section className="max-w-7xl mx-auto">
        <Features {...growthLevels} reverse={true} />
      </section>
    </div>
  );
};

export default HomePage;
