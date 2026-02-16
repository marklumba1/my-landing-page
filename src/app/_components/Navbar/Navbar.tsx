"use client";
import useToggle from "@/app/_lib/useToggle";
import Button from "../Button/Button";
import { Menu, X } from "lucide-react";
import NavBarProps from "./NavBar.types";
import Link from "next/link";

const NavBar: React.FC<NavBarProps> = ({ brand, links, ctas }) => {
  const { value, toggle } = useToggle();

  return (
    <nav className="sticky top-0 bg-white p-5 z-20 shadow-sm">
      <div className="container mx-auto flex justify-between">
        <Link href={"/"} className="flex items-center z-20 font-bold text-2xl">
          {brand}
        </Link>
        <div className="flex gap-2 z-20">
          {ctas.map(({ label, type }) => (
            <Button
              key={label}
              className="hidden sm:block"
              label={label}
              type={type}
            />
          ))}
          <span
            onClick={toggle}
            className="ml-2 my-auto xl:hidden hover:cursor-pointer"
          >
            {!value ? <Menu size={30} /> : <X size={30} />}
          </span>
        </div>
        <ul
          className={`${!value ? "hidden" : ""} absolute z-10 xl:flex bg-white top-[100%] left-0 right-0 xl:bg-transparent flex flex-col xl:flex-row gap-6 justify-center items-start xl:items-center xl:top-0 xl:bottom-0`}
        >
          {links.map(({ label }) => (
            <Link
              key={label}
              href={`#${label}`}
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
