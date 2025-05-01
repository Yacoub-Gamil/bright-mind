"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className=" container mx-auto sticky z-50 top-0  bg-white p-6 shadow-[0px_0.5px_0px_0px_rgba(0,_0,_0,_0.1)] flex items-center justify-between">
      <Logo />
      <NavBar />
      <Link
        href="/contact-us"
        className=" lg:text-xl rounded-l-full bg-primary hidden md:block text-white hover:bg-secondary duration-300 py-2 px-4 "
      >
        contact us
      </Link>

      {/* NavMenu  */}
      <div className="md:hidden z-50 ">
        <NavMenu />
      </div>
    </div>
  );
}

export default Header;
