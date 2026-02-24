import NavBarProps from "../_components/Navbar/NavBar.types";

const navBarData: NavBarProps = {
  brand: "Mark Lumba",
  links: [
    {
      label: "Projects",
      url: "#projects",
      lightThemeBarColorClass: "bg-red-500",
      darkThemeBarColorClass: "bg-cyan-700",
    },
    {
      label: "Experience",
      url: "#experience",
      lightThemeBarColorClass: "bg-blue-500",
      darkThemeBarColorClass: "bg-orange-700",
    },
    {
      label: "Education",
      url: "#education",
      lightThemeBarColorClass: "bg-green-500",
      darkThemeBarColorClass: "bg-rose-700",
    }
  ],
};

export default navBarData;
