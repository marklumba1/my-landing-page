import NavBarProps from "../_components/Navbar/NavBar.types";

const navBarData: NavBarProps = {
  brand: "Mark Lumba",
  links: [
    {
      label: "Projects",
      url: "#projects",
      theme: {
        dark: "bg-red-700",
        light: "bg-cyan-300"
      }
    },
      {
      label: "Tech Stack",
      url: "#techstack",
      theme: {
        dark: "bg-purple-700",
        light: "bg-yellow-300"
      }
    },
    {
      label: "Experience",
      url: "#experience",
      theme: {
        dark: "bg-blue-700",
        light: "bg-orange-300"
      }
    },
    {
      label: "Education",
      url: "#education",
      theme: {
        dark: "bg-green-700",
        light: "bg-rose-300"
      }
    }
  
  ]
};

export default navBarData;
