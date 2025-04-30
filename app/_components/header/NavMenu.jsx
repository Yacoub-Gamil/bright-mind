"use client";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "courses", href: "/courses" },
  { name: "blog", href: "/blog" },
  { name: "contact us", href: "/contact-us" },
];

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useGSAP(() => {
    if (isOpen) {
      gsap.to("#navMenu", {
        width: "100%",
        duration: 0.3,
        display: "block",
      });
      gsap.to("#links", {
        opacity: 1,
        delay: 0.2,
        duration: 0.3,
        scale: 1,
      });
    } else {
      gsap.to("#navMenu", {
        width: 0,
        display: "none",
        duration: 0.2,
        delay: 0.3,
      });
      gsap.to("#links", {
        duration: 0.2,
        opacity: 0,
        scale: 0,
      });
    }
  }, [isOpen]);

  return (
    <div className="">
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className=" cursor-pointer"
      >
        {!isOpen ? (
          <IoMenu className=" text-2xl " />
        ) : (
          <IoCloseSharp className=" text-2xl" />
        )}
      </div>

      <div
        id="navMenu"
        className=" left-0 hidden h-[calc(100vh-65px)] top-[4rem] p-4 w-0 bg-white absolute"
      >
        <div className=" flex justify-center items-center h-full  ">
          <div
            id="links"
            className=" flex flex-col scale-0 opacity-0 items-center justify-center gap-8 capitalize text-3xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathName === link.href
                    ? "text-white py-2 px-4 bg-primary rounded-r-full"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
