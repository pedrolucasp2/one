import { NavItem, NavItemInterface } from "./Navitem";
export function NavBar() {
  const items: NavItemInterface[] = [
    {
      url: "#home",
      label: "Home",
    },
    {
      url: "#projetos",
      label: "Projetos",
    },
    {
      url: "#contato",
      label: "Contato",
    },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#3c5788]">
      <nav className="flex justify-center items-center px-6 h-10 max-w-7xl mx-auto w-full">
        <ul className="navItems flex justify-center items-center gap-8 ">
          {items.map((item, index) => (
            <NavItem key={index} url={item.url} label={item.label} />
          ))}
        </ul>
       
      </nav>
    </header>
  );
}
