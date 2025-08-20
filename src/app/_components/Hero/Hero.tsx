"use client";
import Image from "next/image";
import Announcement from "../Announcement/Announcement";
import Button from "../Button/Button";
import data from "./data.json";
import Background from "../Background/Background";

export default function Hero({className}: {className?: string}) {
  const { headline, subheadline, announcement, cta, badge, footer, brands } =
    data;
  return (
    <Background>
      <div className={`${className} flex flex-col gap-5 items-center max-w-7xl mx-auto`}>
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
            src={"/person.svg"}
            width={200}
            height={200}
            className="absolute hidden md:block -top-52 left-10"
            alt="person"
          />
          <Image
            src="/heropic.png"
            width={1500}
            height={1500}
            className="border max-h-[500px] w-auto"
            alt="hero"
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
    </Background>
  );
}
