"use cleint";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "courses", href: "/courses" },
];

function NavBar() {
  const pathName = usePathname();

  return (
    <div className=" md:flex hidden lg:text-[1.2rem]  items-center capitalize text-xl md:text-[1rem]">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            pathName === link.href &&
            "bg-primary duration-300 text-white px-4 py-2"
          } px-4 py-2`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
