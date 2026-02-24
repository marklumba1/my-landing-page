import { LinkItem } from "@/app/_types/common.types";
interface NavBarLinks extends LinkItem{
  theme: {
    light: string,
    dark: string
  }
}

export default interface NavBarProps {
  brand: string;
  links: NavBarLinks[];
}
