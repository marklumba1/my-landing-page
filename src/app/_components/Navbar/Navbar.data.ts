import NavBarProps from "./NavBar.types";

const navBarData: NavBarProps = {
  brand: "Mark Lumba",
  links: [
    { label: "About Me", url: "/about" },
    { label: "Experience", url: "/experience" },
    { label: "Projects", url: "/projects" },
    { label: "Education", url: "/education" },
    { label: "Contact Me", url: "/contact" },
  ],
  ctas: [
    { label: "View Projects", type: "primary"},
    { label: "See a demo", type: "secondary"},
  ],
};

export default navBarData;
