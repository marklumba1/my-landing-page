import { ButtonType } from "@/app/_types/common.types";
import { LucideIcon } from "lucide-react";

export interface ButtonProps {
  label: string;
  type?: ButtonType
  onClick?: () => void;
  icon?: LucideIcon;
  className?: string;
}