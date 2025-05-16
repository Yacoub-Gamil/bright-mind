import CoursesSection from "@/app/_components/coursesSection/CoursesSection";

export const metadata = {
  title: "courses",
};

function page() {
  return (
    <section>
      <div className=" container mx-auto p-4 mt-[2rem]">
        <div>
          <h1 className=" font-semibold text-4xl lg:text-6xl text-center">
            Browse our <span className=" text-primary">courses</span>
          </h1>
          <p className=" text-center text-[1rem] md:text-xl mt-4">
            Explore 500+ hours of expert-led courses and learn at your own pace.
            Browse now and start your journey!
          </p>
        </div>
        <CoursesSection />
      </div>
    </section>
  );
}

export default page;
