import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Button, { ButtonProps } from "../Button/Button";

interface CardProps {
  title: string;
  description: string;
  cta: ButtonProps;
  image?: {
    url: string,
    size: number
  };
  icon?: LucideIcon;
}

export default function Card({
  title,
  description,
  cta,
  image,
  icon: Icon,
}: CardProps) {
    console.log(image)
  return (
    <div className="flex flex-col gap-4">
      {image && <Image src={image.url} alt="" className=" object-cover rounded shadow h-[200px] border" width={image.size} height={image.size} />}
      {Icon && <Icon />}
      <p className="text-xl">{title}</p>
      <p>{description}</p>
      <Button {...cta} className="w-fit"/>
    </div>
  );
}
