"use client";
import Image from "next/image";
import OurTeam from "./OurTeam";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  useGSAP(() => {
    gsap.fromTo(
      "#aboutSection",
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
    <section id="aboutSection" className=" opacity-0  ">
      <div className=" container mt-[2rem] mx-auto p-4 flex flex-col gap-8">
        <div className=" flex flex-col gap-8 items-center">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-semibold">
            About <span className=" text-primary">BrightMind</span>
          </h1>
          <p className=" text-center text-xl md:text-2xl lg:max-w-[50%]">
            BrightMind empowers learners with expert-led courses to grow skills,
            advance careers, and achieve success.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 mb-[4rem]">
          <Image
            src="/about/aboutHeroImage.jpg"
            alt=""
            width={1000}
            height={1000}
            className=" rounded-xl lg:w-[80%]"
          />
          <div className=" flex flex-wrap justify-between lg:w-[80%] gap-8 ">
            <div className=" flex flex-col items-center">
              <strong className=" text-primary text-2xl md:text-3xl lg:text-4xl">
                100,000+
              </strong>
              <span className=" md:text-xl">Students Enrolled</span>
            </div>
            <div className=" flex flex-col items-center">
              <strong className=" text-primary text-2xl md:text-3xl lg:text-4xl">
                5,000+
              </strong>
              <span className=" md:text-xl">Five-star reviews</span>
            </div>
            <div className=" flex flex-col items-center">
              <strong className=" text-primary text-2xl md:text-3xl lg:text-4xl">
                67,000+
              </strong>
              <span className=" md:text-xl">Students community</span>
            </div>
            <div className=" flex flex-col items-center">
              <strong className=" text-primary text-2xl md:text-3xl lg:text-4xl">
                {" "}
                15,000+
              </strong>
              <span className=" md:text-xl">Job placement</span>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            Our Core <span className=" text-primary">Values</span>
          </h1>
          <div className="flex justify-center gap-2 flex-wrap  flex-col md:flex-row mt-[2rem]">
            <div className="  bg-light-blue rounded-xl p-4">
              <h1 className=" w-10 h-10 rounded-full bg-stone-50 mb-[2rem]"></h1>
              <strong className=" md:text-xl lg:text-2xl">
                Community First
              </strong>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className=" bg-light-orange rounded-xl p-4">
              <h1 className=" w-10 h-10 rounded-full bg-stone-50 mb-[2rem]"></h1>
              <strong className=" md:text-xl lg:text-2xl">
                Community First
              </strong>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className=" bg-light-green rounded-xl p-4">
              <h1 className=" w-10 h-10 rounded-full bg-stone-50 mb-[2rem]"></h1>
              <strong className=" md:text-xl lg:text-2xl">
                Community First
              </strong>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className=" bg-light-yellow rounded-xl p-4">
              <h1 className=" w-10 h-10 rounded-full bg-stone-50 mb-[2rem]"></h1>
              <strong className=" md:text-xl lg:text-2xl">
                Community First
              </strong>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className=" flex lg:max-w-[80%]  flex-col items-center lg:flex-row mx-auto gap-4">
          <div className=" flex flex-col gap-4">
            <div>
              <h1 className=" text-3xl md:text-4xl lg:text-6xl font-semibold mb-4">
                <span className=" text-primary">Inspiring Journey </span>of
                BrightMind’s Growth
              </h1>
              <p className=" text-xl">
                BrightMind started with a vision to make learning accessible and
                impactful. Our expert-led courses empower individuals to gain
                skills, grow careers, and achieve success.
              </p>
            </div>

            <div className=" flex flex-col  text-xl gap-4 lg:gap-6">
              <h1 className=" flex gap-1 items-center">
                <span className="h-2 w-2 rounded-full bg-primary block" />
                Expert-led, practical courses for all skill levels.
              </h1>
              <h1 className=" flex gap-1 items-center">
                <span className="h-2 w-2 rounded-full bg-primary block" />
                Flexible learning anytime, anywhere.
              </h1>
              <h1 className=" flex gap-1 items-center">
                <span className="h-2 w-2 rounded-full bg-primary block" />
                Join a community of passionate learners.
              </h1>
              <h1 className=" flex gap-1 items-center">
                <span className="h-2 w-2 rounded-full bg-primary block" />
                Career-focused skills for real-world success.
              </h1>
            </div>
          </div>
          <Image
            src="/about/image-2.jpg"
            alt=""
            width={500}
            height={500}
            className=" rounded-xl object-contain "
          />
        </div>
        {/* 2 */}
        <div className=" flex lg:max-w-[80%] flex-col lg:flex-row-reverse items-center mx-auto gap-4">
          <div className=" flex flex-col gap-4">
            <div className="">
              <h1 className=" text-3xl md:text-4xl lg:text-6xl font-semibold mb-4">
                Why Choose BrightMind{" "}
                <span className=" text-primary">Training?</span>
              </h1>
              <p className=" text-xl">
                Our flexible learning approach, practical lessons, and
                industry-relevant content empower you to gain skills, grow your
                career, and achieve your goals. Join thousands of learners who
                trust BrightMind for their professional growth!
              </p>
            </div>

            <div className=" flex flex-col text-xl gap-4 lg:gap-6">
              <h1 className=" flex gap-1 items-center">
                <span className="h-2 w-2 rounded-full bg-primary block" />
                Learn from industry professionals with real-world.
              </h1>
              <h1 className=" flex gap-1 items-center">
                <span className="h-2 w-2 rounded-full bg-primary block" />
                Study anytime, anywhere, at your own pace.
              </h1>
              <h1 className=" flex gap-1 items-center">
                <span className="h-2 w-2 rounded-full bg-primary block" />
                Gain practical knowledge to advance in your field.
              </h1>
            </div>
          </div>

          <Image
            src="/about/about-image.jpg"
            alt=""
            width={500}
            height={500}
            className=" rounded-xl object-contain "
          />
        </div>
        {/* 2 */}
        {/* 3-The Team  */}
      </div>
      <OurTeam />
    </section>
  );
}

export default About;
