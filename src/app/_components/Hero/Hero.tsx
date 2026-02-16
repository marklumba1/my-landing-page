"use client";
import Image from "next/image";
import Button from "../Button/Button";
import heroData from "./Hero.data";
export default function Hero({ className }: { className?: string }) {
  const { headline, subheadline, cta, footer, brands } = heroData;
  return (
    <div
      className={`${className} container h-[100vh] px-5 py-14 flex flex-col md:flex-row w-full gap-12 justify-center items-center mx-auto `}
    >
      <div className="flex flex-col pt-16 md:pt-0 w-full md:w-2/3 gap-9 items-start">
        <h1 className="text-6xl lg:text-7xl" dangerouslySetInnerHTML={{__html: headline}}/>
        <p className="text-xl font-semibold">{subheadline}</p>
        <div className="flex gap-2">
          {cta.map((cta) => (
            <Button key={cta.label} label={cta.label} type={cta.type} />
          ))}
        </div>
      </div>

      <div className="hidden md:block w-1/3 relative bg-white rounded-md border-gray-200">
        <Image src={"/person.svg"} width={600} height={400} alt="person" />
      </div>
    </div>
  );
}
