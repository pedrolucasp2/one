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
    <header>
      <nav className="navbar">
        <Link href="/">
          <Image src="" width={50} height={50} alt="logo" />
        </Link>
         <ul className="navItems">
          {items.map((item,index)=>( 
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
            />
          ))}
        </ul>
        <button className="button">button</button>
      </nav>
    </header>
  );
}
