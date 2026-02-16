import { ButtonProps } from "../Button/Button.types";

export default interface HeroProps {
  headline: string,
  subheadline: string,
  cta: ButtonProps[],
  footer: string,
  brands: string[]
}