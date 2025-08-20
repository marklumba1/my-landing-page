import Image from "next/image";
import Card, { CardProps } from "../Card/Card";

export interface FeaturesProps {
  title: { text: string; className: string };
  subtitle: { text: string; className: string };
  features: CardProps[];
  reverse?: boolean;
  image?: string;
}
export default function Features({
  title,
  subtitle,
  features,
  reverse = false,
  image,
}: FeaturesProps) {
  return (
    <div
      className={`flex flex-col xl:flex-row gap-10 ${
        reverse && "flex-col-reverse xl:flex-row-reverse"
      }`}
    >
      {image && (
        <div className="flex-1 border flex rounded-2xl shadow items-center justify-center">
          <Image
            src={image}
            className="rounded-xl w-auto max-h-[500px]"
            alt="realtime"
            width={500}
            height={1000}
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col flex-grow gap-10 xl:gap-5 h-auto`}>
        <p className={title.className}>{title.text}</p>
        <p className={subtitle.className}>{subtitle.text}</p>
        <div className="grid  grid-cols-2 mt-auto gap-10">
          {features.map((feature) => (
            <Card
              key={feature.title.text}
              icon={feature.icon}
              title={feature.title}
              gap={2}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
