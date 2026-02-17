"use client";
import Image from "next/image";
import Button from "../Button/Button";
import heroData from "./Hero.data";
import HeroProps from "./Hero.types";
const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctas, className, image }) => {

  return (
    <div
      className={`${className} container h-[100vh] px-5 py-14 flex flex-col md:px-0 md:flex-row w-full gap-12 justify-center items-center mx-auto `}
    >
      <div className="flex flex-col pt-16 md:pt-0 w-full md:w-2/3 gap-9 items-start">
        <h1 className="text-6xl  lg:text-7xl" dangerouslySetInnerHTML={{__html: headline}}/>
        {subheadline && <p className="text-xl">{subheadline}</p>}
        <div className="flex gap-2">
          {ctas.map((cta) => (
            <Button key={cta.label} label={cta.label} type={cta.type} />
          ))}
        </div>
      </div>

      <div className="hidden  md:block w-1/3 relative bg-white border-gray-200">
        <Image className="rounded-full border-8 border-black hover:cursor-pointer hover:border-lime-500" src={image.src} width={600} height={400} alt={image.alt} />
      </div>
    </div>
  );
}

export default Hero
