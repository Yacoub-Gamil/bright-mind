"use client";
import Link from "next/link";
import MostPopularCard from "./MostPopularCard";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function MostPopularSection() {
  const [courses, setCourses] = useState();
  useEffect(() => {
    async function courses() {
      try {
        const data = await fetch("data.json");
        const res = await data.json(data);
        setCourses(res.courses);
      } catch (err) {
        console.log(err);
      }
    }
    courses();
  }, []);

  return (
    <section className=" bg-[#f7f7f7] mt-[6rem] p-4">
      <div className=" max-w-[80%] mx-auto p-8">
        <div className=" mt-[4rem] flex  flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className=" text-3xl md:text-5xl font-semibold">
            Most Popular <span className=" text-primary">Courses</span>
          </h1>
          <div>
            <Link
              href={"/courses"}
              className=" capitalize bg-primary py-2 px-4 text-white rounded-full"
            >
              view all courses
            </Link>
          </div>
        </div>
      </div>
      {/* Courses Section  */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mx-auto md:max-w-[80%]  gap-2 mt-[4rem] mb-[4rem] ">
        {courses?.map((course) => (
          <MostPopularCard
            key={course.userImage}
            image={course.image}
            title={course.title}
            numLesson={course.numLesson}
            totalTime={course.totalTime}
            numStudents={course.numStudents}
            rate={course.rate}
            userName={course.userName}
            userImage={course.userImage}
            price={course.price}
          />
        ))}
      </div>
      {/* Courses Section  */}
    </section>
  );
}

export default MostPopularSection;
