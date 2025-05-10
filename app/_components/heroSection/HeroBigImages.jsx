"use client";
import Image from "next/image";

function HeroBigImages() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 lg:max-w-[80%] mx-auto gap-2 lg:mt-[6rem] mt-[2rem] p-6">
      <div className=" relative h-[25rem] w-full aspect-square ">
        <Image
          src={"/image-hero-1.jpg"}
          alt="hero-image"
          sizes="100%"
          fill
          priority={80}
          className="rounded-xl"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className=" grid md:grid-cols-1 sm:grid-cols-2 gap-2">
          <div className=" bg-orange rounded-xl p-2">
            <div className=" flex">
              <div className=" w-10 h-10 relative  border-[2px] border-white mx-[-4px] rounded-full">
                <Image src={"/profile-1.png"} alt="" fill sizes="100%" />
              </div>
              <div className=" w-10 h-10 relative border-[2px] border-white mx-[-4px] rounded-full">
                <Image src={"/profile-2.png"} alt="" fill sizes="100%" />
              </div>
              <div className=" w-10 h-10 relative border-[2px] border-white mx-[-4px] rounded-full">
                <Image src={"/profile-3.png"} alt="" fill sizes="100%" />
              </div>
              <div className=" w-10 h-10 relative border-[2px] border-white mx-[-4px] rounded-full">
                <Image src={"/profile-4.png"} alt="" fill sizes="100%" />
              </div>
            </div>
            <h1 className=" text-[1.1rem] font-semibold mt-8">
              We have 40+ Professional Teachers
            </h1>
          </div>
          <div className="bg-green rounded-xl gap-2 justify-between p-6 flex flex-col ">
            <q className="text-[1rem]  font-bold">
              Believe in yourself, keep learning, and and success will follow.
            </q>
            <div>
              <h1 className=" font-semibold text-xl">Mathew S.</h1>
              <p>Quote from our teacher</p>
            </div>
          </div>
        </div>

        <div className=" relative h-[25rem] w-full">
          <Image
            src={"/image-hero-2.jpg"}
            alt="hero-image"
            sizes="100%"
            fill
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBigImages;
