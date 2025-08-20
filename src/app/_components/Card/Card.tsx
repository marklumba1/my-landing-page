"use client";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Button, { ButtonProps } from "../Button/Button";

export interface CardProps {
  title: {
    text: string;
    className?: string;
  };
  description: string;
  cta?: ButtonProps;
  image?: {
    url: string;
    size: number;
  };
  icon?: {
    component: LucideIcon;
    className?: string;
  };
  gap?: number;
}
export default function Card({
  title,
  description,
  cta,
  image,
  icon,
  gap = 2,
}: CardProps) {
  return (
    <div className={`flex flex-col gap-${gap}`}>
      {image && (
        <Image
          src={image.url}
          alt=""
          className=" object-cover rounded shadow h-[200px] border"
          width={image.size}
          height={image.size}
        />
      )}
      {icon && <icon.component className={`${icon.className}`} />}
      <p className={`${title.className}`}>{title.text}</p>
      <p>{description}</p>
      {cta && <Button {...cta} className="w-fit" />}
    </div>
  );
}
