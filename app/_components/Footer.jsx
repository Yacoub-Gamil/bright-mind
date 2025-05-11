import Logo from "./header/Logo";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" p-4 bg-stone-50 ">
      <div className=" container mx-auto ">
        <div className=" flex flex-col justify-center items-center gap-8 ">
          <Logo />
          <p className=" max-w-[80%] md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            doloremque sapiente autem, ut, libero ea quod corrupti placeat
            veniam deleniti architecto nobis.
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
  );
}

export default Footer;
