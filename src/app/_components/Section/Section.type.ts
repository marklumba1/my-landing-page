import { ContentBlockProps } from "@/app/_types/common.types";

export default interface SectionProps extends ContentBlockProps {
  children?: React.ReactNode;
  id: string;
  columns?: 1 | 2 | 3
}