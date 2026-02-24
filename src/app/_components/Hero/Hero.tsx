"use client";
import Image from "next/image";
import Button from "../Button/Button";
import HeroProps from "./Hero.types";
const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  ctas,
  className,
  image,
}) => {
  return (
    <div
      className={`${className} container flex gap-12 justify-center items-center mx-auto `}
    >
      <div className="pt-16 md:pt-0 w-full md:w-2/3 items-start">
        <h1
          className="text-7xl"
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        {subheadline && <p className="text-5xl">{subheadline}</p>}
        <div className="flex gap-2 mt-5">
          {ctas.map((cta) => (
            <Button key={cta.label} label={cta.label} type={cta.type} />
          ))}
        </div>
      </div>

      <div className="hidden  md:block w-1/3 relative bg-white border-gray-200">
        <Image
          className="rounded-full border-8 border-black hover:cursor-pointer "
          src={image.src}
          width={600}
          height={400}
          alt={image.alt}
        />
      </div>
    </div>
  );
};

export default Hero;
