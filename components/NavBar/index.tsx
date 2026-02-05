import Link from "next/link";
import Image from "next/image";
import { NavItem, NavItemInterface } from "../Navitem";
export function NavBar() {
    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Início"

        },
         {
            url: "/about",
            label: "link2"
        },
         {
            url: "/link3",
            label: "link3"
        },
    ]
  return (
    <header className="bg-dark shadow-lg shadow-light/5 z-50 relative">
      <nav className="navbar flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </Link>
         <ul className="navItems flex justify-center items-center gap-6 ">
          {items.map((item,index)=>( 
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
            />
          ))}
        </ul>
        <button className="button bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 trasition-colors duration-300">button</button>
      </nav>
    </header>
  );
}
