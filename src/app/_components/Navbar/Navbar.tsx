"use client";
import useToggle from "@/app/_lib/useToggle";
import { Menu, X } from "lucide-react";
import NavBarProps from "./NavBar.types";
import Link from "next/link";
import useActiveSection from "@/app/_lib/useActiveSection";

const NavBar: React.FC<NavBarProps> = ({ brand, links }) => {
  const { value, toggle } = useToggle();
  const activeTheme = useActiveSection();
  console.log(activeTheme)
  return (
    <nav
      className={`${activeTheme === "dark" ? "bg-slate-950 text-slate-200" : "bg-white"} fixed top-0 left-0 right-0 transition-all ease-in px-5 py-6  md:px-0 z-20 shadow-sm`}
    >
      <div className="container mx-auto flex justify-between  text-3xl ">
        <Link href={"#top"} className="text-nowrap z-20">
          {brand}
        </Link>

        <span onClick={toggle} className="ml-2 my-auto lg:hidden z-20">
          {!value ? <Menu size={30} /> : <X size={30} />}
        </span>

        <ul
          className={`${!value ? "hidden" : ""} absolute top-0 z-10 pt-20 h-[100vh] lg:static lg:flex lg:h-fit lg:pt-0 ${activeTheme === "dark" ? "bg-slate-950 text-slate-200" : "bg-white"} left-0 right-0 lg:bg-transparent flex flex-col lg:flex-row gap-6 justify-start items-center lg:items-center lg:top-0 lg:bottom-0`}
        >
          {links.map(
            ({
              label,
              url,
              theme
            }) => (
              <Link
                key={label}
                href={url}
                className="hover:cursor-pointer group relative px-1"
                onClick={toggle}
              >
                {label}
                <div
                  className={`${theme[activeTheme]} h-2 transition-all ease-in duration-200 group-hover:h-[90%] group-hover:bottom-1 absolute bottom-2 left-0 w-full -z-10`}
                />
              </Link>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
