import Image from "next/image";
import Link from "next/link";

function Testimonial() {
  return (
    <section className=" container mx-auto">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center gap-4 lg:gap-8 ">
        <div className=" relative ">
          <Image
            src={"/testimonial.jpg"}
            alt=""
            width={500}
            height={500}
            className=" rounded-2xl object-cover "
          />
          <div className=" absolute bottom-[4rem] bg-white p-4 left-[2rem] rounded-xl ">
            <h1 className=" font-semibold mb-2 text-xl ">
              Unlocking Image Average <br /> class completion rate{" "}
            </h1>
            <h1 className=" font-semibold text-primary text-3xl">93%</h1>
          </div>
        </div>

        <div className=" flex flex-col gap-4">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-2xl font-semibold md:text-3xl lg:text-5xl">
              Unlocking Knowledge <br /> with{" "}
              <span className=" text-primary"> BrightMind</span>
            </h1>
            <p className=" text-[1rem]">
              BrightMind offers a cutting-edge learning experience designed to
              enhance knowledge and skills. With innovative teaching methods and
              personalized learning
            </p>
          </div>

          <div className=" flex flex-col md:flex-row gap-4">
            <div>
              <strong>500+</strong>
              <p>
                BrightMind offers 500+ hours of expert courses, covering diverse
                subjects for growth and skill development.
              </p>
            </div>

            <div>
              <strong>100,000+</strong>
              <p>
                Join 100,000+ students and access 500+ hours of expert-led
                courses with BrightMind.
              </p>
            </div>
          </div>
          <div className=" mt-4">
            <Link
              className=" py-3 px-4 font-semibold bg-primary rounded-3xl text-white "
              href={"/courses"}
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
