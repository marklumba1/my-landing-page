import Image from "next/image";
import FeatureCardProps from "./FeatureCard.type";
import getFontClassByTheme from "@/app/_lib/getFontClassByTheme";

const FeatureCard: React.FC<FeatureCardProps> = ({
  heading,
  description,
  image,
  className,
  theme,
  alignment,
}) => {
  return (
    <div
      className={`${className} ${getFontClassByTheme(theme)} h-fit rounded-2xl overflow-hidden`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        height={image.height}
        width={image.width}
      />
      <div className="p-5">
        <h1 className={`text-4xl text-${alignment}`}>{heading}</h1>
        <p className={`text-2xl text-${alignment}`}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
