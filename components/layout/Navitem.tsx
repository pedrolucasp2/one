"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItemInterface {
  url: string;
  label: string;
}
export function NavItem(props: NavItemInterface) {
  const pathname = usePathname();
  const isActive = pathname === props.url;
  return (
    <>
      <li className={`
        navItem text-light border-b-2 transition-colors duration-300
        ${isActive 
          ? "border-primary font-bold"
          : "border-transparent hover:border-primary"
        }
      `}>
        <Link href={props.url} className="navLink">
          {props.label}
        </Link>
      </li>
    </>
  );
}
