"use client";
import useToggle from "@/app/_lib/useToggle";
import Button from "../Button/Button";
import { Menu, X } from "lucide-react";
import NavBarProps from "./NavBar.types";
import Link from "next/link";

const NavBar: React.FC<NavBarProps> = ({ brand, links, ctas }) => {
  const { value, toggle } = useToggle();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-5 z-20 shadow-sm">
      <div className="container mx-auto flex justify-between">
        <Link href={"#home"} className="flex items-center z-20 font-bold text-2xl">
          {brand}
        </Link>
      
          <span
            onClick={toggle}
            className="ml-2 my-auto xl:hidden"
          >
            {!value ? <Menu size={30} /> : <X size={30} />}
          </span>
   
        <ul
          className={`${!value ? "hidden" : ""} absolute z-10 container mx-auto xl:flex bg-white top-[100%] left-0 right-0 xl:bg-transparent flex flex-col xl:flex-row gap-6 justify-end items-start xl:items-center xl:top-0 xl:bottom-0`}
        >
          {links.map(({ label, url }) => (
            <Link
              key={label}
              href={url}
              className="hover:cursor-pointer hover:border-b-lime-500 hover:border-b-2"
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
