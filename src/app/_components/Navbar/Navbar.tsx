"use client";
import useToggle from "@/app/_lib/useToggle";
import Button from "../Button/Button";
import data from "./data.json";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const { logo, menu, cta } = data;
  const { value, toggle } = useToggle();

  return (
    <nav className="flex relative justify-between">
      <h1 className="flex items-center z-20 font-bold text-2xl">{logo}</h1>
      <div className="flex gap-2 z-20">
        {cta.map((cta) => (
          <Button label={cta.label} type={cta.type} />
        ))}
        <span onClick={toggle} className="ml-2 my-auto xl:hidden hover:cursor-pointer">
          {!value ? <Menu size={30}/> : <X size={30}/>}
        </span>
      </div>

      <ul className={`${!value ? "hidden" : ""} absolute z-10 xl:flex border-red-500 bg-white top-[100%] left-0 right-0 xl:bg-transparent flex flex-col xl:flex-row  gap-4 justify-center items-start xl:items-center xl:top-0 xl:bottom-0`}>
        {menu.map(({ label }) => (
          <li key={label} className="hover:cursor-pointer">{label}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
