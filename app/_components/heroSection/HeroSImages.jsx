"use client";
import Image from "next/image";

function HeroSImages() {
  return (
    <>
      <div className=" hidden lg:block absolute xl:left-[10rem] lg:left-0 aspect-square w-[5rem]">
        <Image
          src={"/image-small-3.png"}
          alt=""
          fill
          sizes="100%"
          className=" object-contain"
        />
      </div>
      <div className=" hidden lg:block absolute xl:right-[10rem] lg:right-0 aspect-square w-[6rem]">
        <Image
          src={"/image-small-4.png"}
          alt=""
          fill
          sizes="100%"
          className=" object-contain"
        />
      </div>{" "}
      <div className=" hidden lg:block absolute bottom-0 xl:left-[15rem] lg:left-[5rem] aspect-square w-[5rem]">
        <Image
          src={"/image-small-1.png"}
          alt=""
          fill
          sizes="100%"
          className=" object-contain"
        />
      </div>{" "}
      <div className=" hidden lg:block absolute bottom-[1rem] xl:right-[15rem] lg:right-[5rem] aspect-square w-[5rem]">
        <Image
          src={"/image-small-2.png"}
          alt=""
          fill
          sizes="100%"
          className=" object-contain"
        />
      </div>
    </>
  );
}

export default HeroSImages;
