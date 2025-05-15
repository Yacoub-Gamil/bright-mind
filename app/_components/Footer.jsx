import Logo from "./header/Logo";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className=" p-4 bg-stone-50 ">
        <div className=" bg-white w-[100%] p-4 rounded-2xl">
          <div className=" mx-auto  md:max-w-[80%] flex flex-col items-center justify-center h-[40vh] bg-primary p-8 rounded-xl mt-[4rem]">
            <h1 className=" text-center font-semibold text-white text-2xl md:text-3xl lg:text-4xl">
              Take the First Step –{" "}
              <span className=" bg-white text-primary p-1 italic">
                {" "}
                Start Learning Today!
              </span>
            </h1>
            <div className=" flex justify-center mt-[2rem]">
              <Link
                href="contact-us"
                className="capitalize px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white duration-300"
              >
                contact use
              </Link>
            </div>
          </div>
        </div>
        <div className=" container mx-auto ">
          <div className=" flex flex-col justify-center items-center gap-8 ">
            <Logo />
            <p className=" max-w-[80%] md:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident doloremque sapiente autem, ut, libero ea quod corrupti
              placeat veniam deleniti architecto nobis.
            </p>
            <div className=" flex gap-4 text-3xl">
              <CiFacebook />
              <IoLogoInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
