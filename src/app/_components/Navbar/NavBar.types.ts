import { LinkItem } from "@/app/_types/common.types";
interface NavBarLinks extends LinkItem{
  lightThemeBarColorClass: string
  darkThemeBarColorClass: string
}

export default interface NavBarProps {
  brand: string;
  links: NavBarLinks[];
}
