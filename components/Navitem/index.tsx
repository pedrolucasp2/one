import Link from "next/link";

export interface NavItemInterface {
    url: string;
    label: string;
}
export function NavItem(props: NavItemInterface) {
  return (
    <>
      <li className="navItem border-b-2 text-[#EEEEEE]">
        <Link href={props.url}className="navLink">
          {props.label}
        </Link>
      </li>
    </>
  );
}
