import getFontClassByTheme from "@/app/_lib/getFontClassByTheme";
import SectionProps from "./Section.type";

const Section: React.FC<SectionProps> = ({
  heading,
  description,
  children,
  className,
  theme,
  alignment
}) => {
 
  return (
    <section className={className}>
      <div className="container mx-auto">
        <h1 className={`text-8xl text-${alignment} font-extrabold ${getFontClassByTheme(theme)}`}>{heading}</h1>
        <p className={`text-3xl text-${alignment} font-extrabold ${getFontClassByTheme(theme)}`}>{description}</p>
        {children}
      </div>
    </section>
  );
};

export default Section;
