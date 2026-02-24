import { ImageProps } from "next/image";
export default interface HeroProps {
  headline: string,
  subheadline: string,
  footer?: string,
  brands?: string[],
  className?: string
  image: ImageProps
}