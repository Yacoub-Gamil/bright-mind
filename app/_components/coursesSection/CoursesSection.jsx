"use client";
import { useEffect, useState } from "react";
import MostPopularCard from "../mostPopular/MostPopularCard";

const buttons = [
  { name: "all" },
  { name: "design" },
  { name: "business" },
  { name: "development" },
  { name: "digital Markeing" },
];
function CoursesSection() {
  const [active, setActiv] = useState("all");
  const [courses, setCourses] = useState();

  const coursesFilter = courses?.filter((courses) =>
    active === "all" ? courses : courses.categray === active
  );

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("data.json");
        const res = await data.json();
        setCourses(res.courses);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className=" ">
      <div className=" p-4 bg-stone-50 lg:max-w-[60%] mx-auto rounded-2xl flex justify-between mt-8">
        {buttons.map((button) => (
          <button
            className={`cursor-pointer capitalize py-1 px-3 ${
              button.name === active
                ? "bg-primary duration-600 text-white rounded-2xl"
                : ""
            }`}
            key={button.name}
            onClick={() => setActiv(button.name)}
          >
            {button.name}
          </button>
        ))}
      </div>
      <div className="  p-4 rounded-2xl bg-stone-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mx-auto lg:max-w-[80%]  gap-2 mt-[4rem] mb-[4rem] ">
        {coursesFilter?.map((course) => (
          <MostPopularCard
            name="card"
            id={course.id}
            active={active}
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
    </div>
  );
}

export default CoursesSection;
