import Hero from "./_components/Hero/Hero";
import heropic from "../../public/heropic.png";
import dots from "../../public/dots.svg";
import person from "../../public/person.svg";
import Image from "next/image";
const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* background */}
      <div
        className="absolute -z-10 top-0 right-0 bottom-0 left-0 bg-repeat bg-[length:20px_20px]"
        style={{ backgroundImage: `url(${dots.src}` }}
      >
        <div className="bg-gradient-to-t from-transparent to-white absolute top-0 bottom-0 w-full" />
        <div className="bg-gradient-to-b from-transparent to-white absolute top-0 bottom-0 w-full" />
      </div>
      {/* background */}
      <div className="max-w-7xl mx-auto px-5">
        <Hero />
        <div className="p-2 relative bg-gray-100 rounded-md border-gray-200 border-4">
            <Image src={person} width={200} className="absolute hidden md:block -top-52 left-10" alt="hero" />
          <Image src={heropic} width={1500} className="border" alt="hero" />
        </div>
        <div className="h-96"></div>
      </div>
    </div>
  );
};

export default HomePage;
