"use client";
export interface NavItemInterface {
  url: string;
  label: string;
}

export function NavItem({ url, label }: NavItemInterface) {
  return (
    <li className="group">
      <a 
        href={url} 
        className="
          navLink 
          text-gray-300 
          hover:text-cyan-400 
          font-medium 
          transition-colors 
          duration-300 
          border-b-2 
          border-transparent 
          hover:border-cyan-400
          pb-1
        "
      >
        {label}
      </a>
    </li>
  );
}
