import NavBarProps from "../_components/Navbar/NavBar.types";

const navBarData: NavBarProps = {
  brand: "Mark Lumba",
  links: [
    {
      label: "Projects",
      url: "#projects",
      theme: {
        dark: "bg-red-500",
        light: "bg-cyan-700"
      }

    },
    {
      label: "Experience",
      url: "#experience",
      theme: {
        dark: "bg-blue-500",
        light: "bg-orange-700"
      }
    },
    {
      label: "Education",
      url: "#education",
      theme: {
        dark: "bg-green-500",
        light: "bg-rose-700"
      }
    }
  ],
};

export default navBarData;
