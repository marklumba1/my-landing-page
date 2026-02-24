import { ContentBlockProps } from "@/app/_types/common.types";
import { ImageProps } from "next/image";

export default interface CardProps extends ContentBlockProps{
    image?: ImageProps
    link?: string
    imageAsIcon?: boolean
    pills?: string[]
    border?: boolean
}