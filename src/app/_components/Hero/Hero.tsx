"use client";
import Image from "next/image";
import Button from "../Button/Button";
import heroData from "./Hero.data";
export default function Hero({className}: {className?: string}) {
  const { headline, subheadline, cta, footer, brands } =
    heroData;
  return (
      <div className={`${className} container mx-auto py-5 px-5 md:px-0 md:pt-8 lg:py-10 flex flex-col gap-5 items-center`}>
        <h1 className="font-bold text-5xl">{headline}</h1>
        <p>{subheadline}</p>
        <div className="flex gap-2 w-full justify-center">
          {cta.map((cta) => (
            <Button key={cta.label} label={cta.label} type={cta.type} />
          ))}
        </div>
        <div className="p-2 mt-10 relative bg-white rounded-md border-gray-200 shadow border">
          <Image
            src={"/person.svg"}
            width={200}
            height={200}
            alt="person"
          />
         
        </div>
        <p>{footer}</p>
        <div className="flex gap-5 max-w-56 justify-center flex-wrap">
          {brands.map((brand) => (
            <span key={brand} className="font-semibold text-lg capitalize">
              {brand}
            </span>
          ))}
        </div>
      </div>
  );
}
