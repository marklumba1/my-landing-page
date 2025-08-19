import type { LucideIcon } from "lucide-react";

`use client`;
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: string;
  icon?: LucideIcon;
  className?: string;
}
export default function Button({
  label,
  onClick,
  type = "primary",
  icon: Icon,
  className
}: ButtonProps) {
  const buttonTypeCss =
    type === `secondary` ? `bg-black text-white` : `text-black bg-white`;
  return (
    <button
      className={`${className} border flex gap-2 items-center rounded-xl px-4 py-2 relative group shadow ${buttonTypeCss}`}
      onClick={onClick}
    >
      {Icon && <Icon size={20} />}
      <div className="relative overflow-hidden">
        <span className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center  group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center   translate-y-full  group-hover:translate-y-0">
          {label}
        </span>
        <span className="opacity-0">{label}</span>
      </div>
    </button>
  );
}
