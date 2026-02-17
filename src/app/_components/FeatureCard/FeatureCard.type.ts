import { ContentBlockProps } from "@/app/_types/common.types";
import { ImageProps } from "next/image";

export default interface FeatureCardProps extends ContentBlockProps{
    image: ImageProps
}