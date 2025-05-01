"use client";
import Image from "next/image";
import Link from "next/link";

import { IoBookOutline, IoStarSharp } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineSchool } from "react-icons/md";

function MostPopularCard({
  image,
  title,
  numLesson,
  totalTime,
  numStudents,
  rate = "4.0",
  userName,
  userImage,
  price,
}) {
  return (
    <Link href={""} className=" bg-white p-4 rounded-2xl ">
      <div className=" flex flex-col gap-8">
        <div className=" relative w-full h-[15rem] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt=""
            fill
            sizes="100%"
            className=" object-cover hover:scale-105 duration-300"
          />
          <div className=" z-20 absolute font-semibold flex items-center gap-2 py-1 px-3 rounded-4xl bg-white left-[1rem] top-[0.5rem]">
            <IoStarSharp className="text-amber-400 text-xl" />
            <span>{rate}</span>
          </div>
        </div>
        <h1 className=" md:text-2xl font-semibold">{title}</h1>
        <div className="flex flex-wrap gap-4">
          <h1 className=" flex items-center gap-2 border py-2 border-light-blue px-4 rounded-full">
            <IoBookOutline /> <span>{numLesson} lesson </span>
          </h1>
          <h1 className=" flex items-center gap-2 border border-light-blue p-2  rounded-full">
            <CiClock2 />
            <span>{totalTime}h 30m </span>
          </h1>
          <h1 className=" flex items-center gap-2 border-light-blue border py-2 px-4 rounded-full">
            <MdOutlineSchool />
            <span>{numStudents} students </span>
          </h1>
        </div>
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <Image
              src={userImage}
              width={30}
              height={30}
              alt={userName}
              sizes="100%"
              quality={100}
              className=" rounded-full"
            />
            <h1 className=" font-semibold text-[1rem]">{userName}</h1>
          </div>
          <strong className=" text-[1rem]">${price}</strong>
        </div>
      </div>
    </Link>
  );
}

export default MostPopularCard;
