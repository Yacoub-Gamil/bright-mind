import Link from "next/link";
import { GiBrain } from "react-icons/gi";

function Logo() {
  return (
    <Link href={"/"} className=" flex items-center font-semibold text-2xl md:text-2xl lg:text-3xl">
      <GiBrain className="text-primary " />
      <span className="">
        Bright<span className=" text-primary">Mind</span>
      </span>
    </Link>
  );
}

export default Logo;
