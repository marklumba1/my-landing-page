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
      <h1 className="border font-bold text-xl">{logo}</h1>

      <div className="flex gap-2">
        {cta.map((cta) => (
          <Button label={cta.label} type={cta.type} />
        ))}
        <span onClick={toggle} className="ml-2 my-auto xl:hidden hover:cursor-pointer">
          {!value ? <Menu size={30}/> : <X size={30}/>}
        </span>
      </div>

      <ul className={`${!value ? "hidden" : ""} absolute -z-10 xl:flex transition h-auto bg-white top-10 xl:top-0 xl:bg-transparent xl:h-full flex flex-col xl:flex-row left-0 right-0  gap-2 justify-center items-start xl:items-center`}>
        {menu.map(({ label }) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
