import Link from "next/link";
import data from "./data.json";
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 rounded-t-2xl">
      <div className="max-w-7xl mx-auto p-10 grid grid-cols-3">
        {data.map((menu) => (
          <div key={menu.title}>
            <h1 className=" uppercase font-medium">{menu.title}</h1>
            <ul className="flex flex-col gap-4 mt-8">
              {menu.items.map((item) => (
                <Link key={item.label} href={"/"}>
                  {item.label}
                  {item.badge && (
                    <span className=" ml-1 bg-lime-300 px-2 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
