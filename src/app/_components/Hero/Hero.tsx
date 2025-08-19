import Image from "next/image";
import Announcement from "../Announcement/Announcement";
import Button from "../Button/Button";
import data from "./data.json";
import person from "../../../../public/person.svg";
import heropic from "../../../../public/heropic.png";
import dots from "../../../../public/dots.svg";

export default function Hero() {
  const { headline, subheadline, announcement, cta, badge, footer, brands } =
    data;
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

      <div className="flex flex-col gap-5 items-center max-w-7xl mx-auto">
        <Announcement link="/" text={announcement} label={badge} />
        <h1 className="font-bold text-5xl text-center max-w-96">{headline}</h1>
        <p>{subheadline}</p>
        <div className="flex gap-2 w-full justify-center">
          {cta.map((cta) => (
            <Button key={cta.label} label={cta.label} type={cta.type} />
          ))}
        </div>
        <div className="p-2 mt-10 relative bg-white rounded-md border-gray-200 shadow border">
          <Image
            src={person}
            width={200}
            className="absolute hidden md:block -top-52 left-10"
            alt="hero"
          />
          <Image src={heropic} width={1500} className="border" alt="hero" />
        </div>
        <p>{footer}</p>
        <div className="flex gap-5 max-w-56 justify-center flex-wrap">
          {brands.map((brand) => (
            <span key={brand} className="font-semibold text-lg capitalize">{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
