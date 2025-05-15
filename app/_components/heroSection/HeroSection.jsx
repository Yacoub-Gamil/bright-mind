"use client";
import Link from "next/link";
import HeroSImages from "./HeroSImages";
import HeroBigImages from "./HeroBigImages";
import HeroSlider from "./HeroSlider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  useGSAP(() => {
    gsap.fromTo(
      "#heroSection",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <section id="heroSection" className=" opacity-0 container mx-auto">
      <div className=" relative p-4 flex justify-center md:mt-[3rem] lg:mt-[6rem]">
        {/* the sides images in the hero section  */}
        <HeroSImages />
        {/* the sides images in the hero section  */}

        {/* title and descripition */}
        <div className=" flex flex-col gap-6">
          <h1 className=" text-[2.1rem] md:text-6xl lg:text-[4rem] text-center font-semibold">
            Learn and Grow with <br /> Top{" "}
            <span className=" text-primary ">Online Courses</span>
          </h1>
          <p className=" max-w-[50rem] md:text-xl text-center">
            Discover top online courses to upgrade your skills and stay ahead.
            Learn from experts and enhance your expertise at your own pace.
          </p>
          <div className=" flex justify-center md:text-xl items-center gap-4  md:gap-8 mt-2 md:mt-[3rem] capitalize">
            <Link
              href={"/courses"}
              className=" bg-primary py-3 px-4 rounded-[1px] rounded-s-full text-white hover:bg-secondary hover:text-white duration-300 "
            >
              explore courses
            </Link>
            <Link
              href={"/contact-us"}
              className=" border py-3 px-4 rounded-[1px] rounded-r-full bg-secondary duration-300 text-white hover:bg-primary  "
            >
              contact us
            </Link>
          </div>
        </div>
        {/* title and descripition */}
      </div>

      {/* hero big images  */}
      <HeroBigImages />
      {/* hero big images  */}

      {/* Start Hero Slider  */}
      <HeroSlider />
      {/* End Hero Slider  */}
    </section>
  );
}

export default HeroSection;
