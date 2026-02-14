import Link from "next/link";
import Image from "next/image";
import { NavItem, NavItemInterface } from "./Navitem";
export function NavBar() {
  const items: NavItemInterface[] = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/projetos",
      label: "Projetos",
    },
     {
      url: "/Contato",
      label: "Contato",
    },
  ];
  return (
    <header className="w-full">
      <nav className="navbar flex justify-between items-center p-3">
        <ul className="navItems flex justify-center items-center gap-6 ">
          {items.map((item, index) => (
            <NavItem key={index} url={item.url} label={item.label} />
          ))}
        </ul>
        <button className="button bg-primary text-light font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 trasition-colors duration-300">
          Download CV
        </button>
      </nav>
    </header>
  );
}
