import { useEffect, useState } from "react";
import { Theme } from "../_types/common.types";

const useActiveSection = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>("light");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-theme]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme") as Theme;
            setActiveTheme(theme);
          }
        },
       
      );
    },  { threshold: 0.6 });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeTheme;
};

export default useActiveSection
