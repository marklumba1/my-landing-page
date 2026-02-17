import { ImageProps } from "next/image";
import { ButtonProps } from "../Button/Button.types";

export default interface HeroProps {
  headline: string,
  subheadline: string,
  ctas: ButtonProps[],
  footer: string,
  brands: string[],
  className?: string
  image: ImageProps
}