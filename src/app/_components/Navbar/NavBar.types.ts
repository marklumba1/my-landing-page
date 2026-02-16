import { CTA, Link } from "@/app/_types/common.types";

export default interface NavBarProps {
  brand: string;
  links: Link[];
  ctas: CTA[];
}
