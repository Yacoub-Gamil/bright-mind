"use client";
import Image from "next/image";
import Link from "next/link";
import FrequentlyQuestions from "./FrequentlyQuestions";

const questions = [
  {
    id: 0,
    question: "what is bright mind",
    answer:
      "Our instructors are industry experts with years of experience in their respective fields. They bring real-world insights and practical knowledge to the courses to ensure that learners gain valuable and applicable skills.",
  },
  {
    id: 1,
    question: "Who are the instructors on BrightMind?",
    answer:
      "Toby Sola is the founder of Brightmind and has been teaching meditation for two decades. His approach combines years of monastic training with close collaboration alongside renowned teacher Shinzen Young. Toby is also an award-winning designer.",
  },
  {
    id: 2,
    question: "Can I learn at my own pace?",
    answer:
      "Brightmind allows you to learn at your own pace. The app provides structured meditation programs that you can follow on your schedule, with the flexibility to choose when and how often you practice.",
  },
  {
    id: 3,
    question: "How much does BrightMind cost?",
    answer:
      "Brightmind offers a subscription plan for $99.99 per year. This membership includes daily guided meditations, podcasts, one-on-one coaching, live monthly 4-hour retreats, daily community sits, and access to a supportive chat community.Gift cards are also available, with options such as:3-month membership for $29.996-month membership for $49.991-year membership for $99.99Pricing may vary based on location, and charges may be converted to your local currency",
  },
  {
    id: 4,
    question: "Is BrightMind suitable for beginners?",
    answer:
      "Yes, Brightmind is suitable for beginners. The app offers step-by-step guided meditations, structured programs, and easy-to-follow instructions designed to help beginners build a strong meditation practice. It also provides support through coaching, community sessions, and retreats to enhance the learning experience..",
  },
];

function Testimonial() {
  return (
    <section className=" container mx-auto mt-[4rem] md:max-w-[90%] p-4">
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
          <div className=" flex flex-col gap-6">
            <h1 className=" text-2xl font-semibold md:text-3xl lg:text-5xl">
              Unlocking Knowledge <br /> with{" "}
              <span className=" text-primary"> BrightMind</span>
            </h1>
            <p className=" md:text-[1.4rem]">
              BrightMind offers a cutting-edge learning experience designed to
              enhance knowledge and skills. With innovative teaching methods and
              personalized learning
            </p>
          </div>

          <div className=" flex flex-col md:flex-row gap-6 mt-[1rem]">
            <div className=" md:text-xl">
              <strong>500+</strong>
              <p className=" mt-2">
                BrightMind offers 500+ hours of expert courses, covering diverse
                subjects for growth and skill development.
              </p>
            </div>

            <div className="md:text-xl">
              <strong>100,000+</strong>
              <p className=" mt-2">
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

      <div className=" mt-[4rem] p-4">
        <div className="">
          <h1 className=" text-center text-3xl lg:text-5xl font-semibold">
            What <span className=" text-primary">Learners Saying</span> <br />{" "}
            About BrightMind
          </h1>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-[2rem]">
          <div className=" bg-stone-100 p-4 rounded-2xl flex flex-col gap-8">
            <q className="">
              BrightMind has truly transformed my career. The 500+ hours of
              content are well-structured, and the expert instructors made
              complex topics easy to understand. Highly recommend it to anyone
              looking to upskill
            </q>
            <div className=" flex items-center gap-3">
              <Image
                src={"/mostPopular-Images/usersImages/user-1.png"}
                width={50}
                height={50}
                alt=""
                className=" rounded-full"
              />
              <div>
                <h1 className=" text-xl font-semibold">Kathryn Murphy</h1>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className=" bg-stone-100  p-4 rounded-2xl flex flex-col gap-8">
            <q className="">
              BrightMind has truly transformed my career. The 500+ hours of
              content are well-structured, and the expert instructors made
              complex topics easy to understand. Highly recommend it to anyone
              looking to upskill
            </q>
            <div className=" flex items-center gap-3">
              <Image
                src={"/mostPopular-Images/usersImages/user-2.png"}
                width={50}
                height={50}
                alt=""
                className=" rounded-full"
              />
              <div>
                <h1 className=" text-xl font-semibold">Kathryn Murphy</h1>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className=" bg-stone-100  p-4 rounded-2xl flex flex-col gap-8">
            <q className="">
              BrightMind has truly transformed my career. The 500+ hours of
              content are well-structured, and the expert instructors made
              complex topics easy to understand. Highly recommend it to anyone
              looking to upskill
            </q>
            <div className=" flex items-center gap-3">
              <Image
                src={"/mostPopular-Images/usersImages/user-3.png"}
                width={50}
                height={50}
                alt=""
                className=" rounded-full"
              />
              <div>
                <h1 className=" text-xl font-semibold">Kathryn Murphy</h1>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[4rem]">
        <div className="  grid grid-cols-1 lg:grid-cols-2 gap-4  ">
          <div className="relative w-full ">
            <h1 className="lg:sticky md:text-5xl top-[8rem] mb-[2rem] left-0 font-semibold text-center text-3xl lg:text-6xl">
              Frequently Asked{" "}
              <span className=" text-primary font-bold">Questions</span>
            </h1>
          </div>
          <div className=" grid grid-cols-1 gap-4">
            {questions.map((question, index) => (
              <FrequentlyQuestions
                key={question.id}
                questions={question}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
