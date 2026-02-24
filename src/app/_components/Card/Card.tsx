import Image from "next/image";
import CardWrapper from "../CardWrapper/CardWrapper";
import CardProps from "./Card.types";
import getFontColorClassByTheme from "@/app/_lib/getFontColorClassByTheme";

const Card: React.FC<CardProps> = ({
  heading,
  description,
  image,
  className,
  theme,
  alignment,
  link,
  imageAsIcon = false,
  pills,
  border,
}) => {
  const borderClass = border
    ? theme === "dark"
      ? " border-8 border-slate-200"
      : "border-8 border-slate-950"
    : "";
  return (
    <CardWrapper
      className={`${className} ${getFontColorClassByTheme(theme)} hover:-translate-y-3 duration-300 h-fit rounded-2xl shadow-2xl overflow-hidden ${borderClass}`}
      link={link}
    >
      {image ? (
        !imageAsIcon ? (
          <div className="relative aspect-video">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-left-top"
            />
          </div>
        ) : (
          <Image
            className="mx-auto w-16 h-16 mt-5"
            src={image.src}
            alt={image.alt}
            height={300}
            width={300}
          />
        )
      ) : null}

      <div className={`p-5 text-${alignment}`}>
        <h1 className={`text-4xl mb-2`}>{heading}</h1>
        <p className={`text-2xl`}>{description}</p>
      </div>
      {pills && (
        <div className={`flex flex-wrap justify-${alignment} gap-2  px-5 pb-5`}>
          {pills.map((pill, index) => (
            <span
              key={index}
              className={`${theme === "dark" ? "bg-white text-slate-950" : "bg-slate-950 text-white"} text-nowrap px-5 py-1 rounded-xl`}
            >
              {pill}
            </span>
          ))}
        </div>
      )}
    </CardWrapper>
  );
};

export default Card;
