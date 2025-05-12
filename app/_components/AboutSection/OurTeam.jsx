"use client";

import Image from "next/image";

import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import FrequentlyQuestions from "../testimonial/FrequentlyQuestions";

const ourTeam = [
  {
    image: "/about/teamImages/admin-1.jpg",
    name: "Marvin McKinney",
    jobTitle: "Business Development",
  },
  {
    image: "/about/teamImages/admin-2.jpg",
    name: "Cody Fisher",
    jobTitle: "UI/UX Designer",
  },
  {
    image: "/about/teamImages/admin-3.jpg",
    name: "Bessie Cooper",
    jobTitle: "Software Developer",
  },
  {
    image: "/about/teamImages/admin-4.jpg",
    name: "Wade Warren",
    jobTitle: "Meta Marketer",
  },
  {
    image: "/about/teamImages/admin-5.jpg",
    name: "Ronald Richards",
    jobTitle: "Graphic Designer",
  },
  {
    image: "/about/teamImages/admin-6.jpg",
    name: "Albert Flores",
    jobTitle: "Digital Marketer",
  },
];

function OurTeam() {
  return (
    <section className=" bg-stone-50 p-4 ">
      <div className=" container mx-auto">
        <h1 className=" text-4xl mt-[4rem] text-center md:text-5xl lg:text-6xl  font-semibold">
          Meet Our <span className=" text-primary">Expert Team</span>
        </h1>
        <div className=" mt-[4rem] mb-[4rem]  lg:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {ourTeam.map((admin) => (
            <div key={admin.name} className=" p-6 bg-white rounded-xl">
              <div>
                <Image src={admin.image} alt="" width={1000} height={1000} />
              </div>
              <div className=" mt-4">
                <h1 className=" font-semibold text-xl">{admin.name}</h1>
                <p>{admin.jobTitle}</p>
              </div>
              <div className=" flex gap-2 text-2xl mt-4">
                <CiFacebook />
                <IoLogoInstagram />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
