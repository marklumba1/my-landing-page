import NavBarProps from "./NavBar.types";

const navBarData: NavBarProps = {
  brand: "Remote",
  links: [
    { label: "About", url: "/about" },
    { label: "Feature", url: "/feature" },
    { label: "Pricing", url: "/pricing" },
    { label: "Contact", url: "/contact" },
    { label: "Blog", url: "/blog" },
  ],
  ctas: [
    { label: "Try for free", type: "primary" },
    { label: "Get a demo", type: "secondary" },
  ],
};

export default navBarData;
