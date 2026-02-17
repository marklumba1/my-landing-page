export type ButtonType = "primary" | "secondary" | "link";

export type LinkItem = {
  label: string;
  url: string;
};

export type Theme = "light" | "dark";

export type ContentBlockProps = {
  heading: string;
  description?: string;
  className?: string;
  theme?: Theme
  alignment?: "start" | "center" | "end"
};
