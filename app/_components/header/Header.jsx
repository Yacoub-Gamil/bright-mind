"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="flex container  justify-between bg-white top-0 z-50  sticky shadow-[0px_0.5px_0px_0px_rgba(0,_0,_0,_0.1)] mx-auto p-6 w- maxitems-center">
      <Logo />
      <NavBar />
      <Link
        href="/contact-us"
        className="hidden md:block bg-primary hover:bg-secondary px-4 py-2 rounded-l-full text-white lg:text-xl duration-300"
      >
        contact us
      </Link>

      {/* NavMenu  */}
      <div className="md:hidden z-50">
        <NavMenu />
      </div>
    </div>
  );
}

export default Header;
