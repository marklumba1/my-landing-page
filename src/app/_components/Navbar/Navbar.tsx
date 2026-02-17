"use client";
import useToggle from "@/app/_lib/useToggle";
import { Menu, X } from "lucide-react";
import NavBarProps from "./NavBar.types";
import Link from "next/link";
import useScroll from "@/app/_lib/useScroll";

const NavBar: React.FC<NavBarProps> = ({ brand, links }) => {
  const { value, toggle } = useToggle();
  const scrollY = useScroll();
  console.log(scrollY);
  const navClass = scrollY > 0 ? "bg-green-500" : "bg-white";
  const navLinkBarClass = scrollY > 0 ? "bg-yellow-400" : "bg-green-500";
  return (
    <nav
      className={`fixed top-0 left-0 right-0 ${navClass} transition-all ease-in px-5 py-6  md:px-0 z-20 shadow-sm`}
    >
      <div className="container mx-auto flex justify-between  text-3xl ">
        <Link href={"#top"} className="text-nowrap z-20">
          {brand}
        </Link>

        <span onClick={toggle} className="ml-2 my-auto lg:hidden z-20">
          {!value ? <Menu size={30} /> : <X size={30} />}
        </span>

        <ul
          className={`${!value ? "hidden" : ""} ${navClass} absolute top-0 z-10 pt-20 h-[100vh] lg:static lg:flex lg:h-fit lg:pt-0 bg-white left-0 right-0 lg:bg-transparent flex flex-col lg:flex-row gap-6 justify-start items-center lg:items-center lg:top-0 lg:bottom-0`}
        >
          {links.map(({ label, url }) => (
            <Link
              key={label}
              href={url}
              className="hover:cursor-pointer group relative px-1"
            >
              {label}
              <div
                className={`${navLinkBarClass} h-2 transition-all ease-in duration-200 group-hover:h-[90%] group-hover:bottom-1 absolute bottom-2 left-0 w-full -z-10`}
              />
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
