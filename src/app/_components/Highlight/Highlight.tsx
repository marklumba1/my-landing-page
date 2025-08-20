"use client";
import type { LucideIcon } from "lucide-react";
import Button, { ButtonProps } from "../Button/Button";
import { ReactNode } from "react";

interface HighlightProps {
  logo?: LucideIcon;
  title: string;
  description?: string;
  cta?: ButtonProps;
  textHighlight: string;
  children?: ReactNode
}
export default function Highlight({
  logo: Logo,
  title,
  description,
  cta,
  textHighlight,
  children
}: HighlightProps) {
  return (
    <div className="flex items-center flex-col gap-5">
      {Logo && <Logo size={50} />}

      <p className="text-5xl max-w-[500px] text-center">
        {title}{" "}
        <span className=" bg-lime-300 whitespace-nowrap [mask-image:url('/brushStroke.png')]    [mask-size:100%_90%] [mask-repeat:no-repeat] [mask-position:center]">
          {textHighlight}
        </span>
      </p>
      <p>{description}</p>
      {children && children}
      {cta && <Button label={cta.label} icon={cta.icon} type={cta.type} />}
    </div>
  );
}
