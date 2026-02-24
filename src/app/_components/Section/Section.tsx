import getFontClassByTheme from "@/app/_lib/getFontColorClassByTheme";
import SectionProps from "./Section.type";
import { columnMapMD } from "@/app/_lib/maps";

const Section: React.FC<SectionProps> = ({
  heading,
  description,
  children,
  className,
  theme = "light",
  alignment,
  id,
  columns = 1,
}) => {
  const colClass = columnMapMD[columns]
  return (
    <section
      className={`${className} ${theme === "dark" && "bg-slate-950"} py-20 px-5 md:px-0`}
      id={id}
      data-theme={theme}
    >
      <div className="container mx-auto">
        {heading && (
          <h1
            className={`text-6xl mb-8 text-${alignment} ${getFontClassByTheme(theme)}`}
          >
            {heading}
          </h1>
        )}
        {description && (
          <p
            className={`text-5xl mb-10 text-${alignment}  ${getFontClassByTheme(theme)}`}
          >
            {description}
          </p>
        )}
        {children ? (
          columns ? (
            <div className={`grid grid-cols-1 ${colClass} gap-10`}>{children}</div>
          ) : (
            children
          )
        ) : null}
      </div>
    </section>
  );
};

export default Section;
