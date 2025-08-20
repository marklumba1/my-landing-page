"use client";
import Button, { ButtonProps } from "../Button/Button";
import { ReactNode } from "react";

interface HighlightProps {
  logo?: ReactNode;
  title: ReactNode;
  description?: string;
  cta?: ButtonProps;
  children?: ReactNode
}
export default function Highlight({
  logo,
  title,
  description,
  cta,
  children
}: HighlightProps) {
  return (
    <div className="flex items-center flex-col gap-5">
      {logo && <div>{logo}</div>}

      <p className="text-5xl max-w-[500px] text-center">
        {title}
      </p>
      <p className="text-center">{description}</p>
      {children && children}
      {cta && <Button label={cta.label} icon={cta.icon} type={cta.type} />}
    </div>
  );
}
