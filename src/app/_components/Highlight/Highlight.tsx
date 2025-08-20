"use client";
import Button, { ButtonProps } from "../Button/Button";
import { ReactNode } from "react";

interface HighlightProps {
  logo?: ReactNode;
  title: string;
  description?: string;
  cta?: ButtonProps;
  textHighlight: string;
  children?: ReactNode
}
export default function Highlight({
  logo,
  title,
  description,
  cta,
  textHighlight,
  children
}: HighlightProps) {
  return (
    <div className="flex items-center flex-col gap-5">
      {logo && <div>{logo}</div>}

      <p className="text-5xl max-w-[500px] text-center">
        {title}{" "}
        <span className=" bg-lime-300 whitespace-nowrap [mask-image:url('/brushstroke.png')]    [mask-size:100%_90%] [mask-repeat:no-repeat] [mask-position:center]">
          {textHighlight}
        </span>
      </p>
      <p>{description}</p>
      {children && children}
      {cta && <Button label={cta.label} icon={cta.icon} type={cta.type} />}
    </div>
  );
}
