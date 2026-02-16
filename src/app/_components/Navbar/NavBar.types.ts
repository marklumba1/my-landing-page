import { ButtonProps } from "../Button/Button.types";
import { LinkItem } from "@/app/_types/common.types";

export default interface NavBarProps {
  brand: string;
  links: LinkItem[];
  ctas: ButtonProps[];
}
