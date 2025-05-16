import Image from "next/image";
import { IoIosStar } from "react-icons/io";

async function page({ params }) {
  const { id } = await params;
  const data = await fetch("http://localhost:3000/data.json");
  const res = await data.json();
  const coures = res?.courses?.find((course) => course.id == id);

  return (
    <section className=" container mx-auto p-4">
      <div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl mt-[2rem] mb-[1.2rem] font-semibold text-center">
            {coures.title}
          </h1>
          <div className=" flex items-center gap-2 justify-center">
            <div className=" flex gap-1 text-yellow-400 ">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <h1 className=" text-xl">{coures.numStudents} students</h1>
          </div>
          <div className=" flex items-center gap-2 justify-center">
            <Image
              src={coures.userImage}
              alt=""
              width={50}
              height={50}
              className=" rounded-full"
            />
            <h1 className=" font-semibold text-xl">{coures.userName}</h1>
          </div>
        </div>
        <div className=" mt-[2rem] lg:flex flex-row-reverse gap-4 relative">
          <div className=" bg-light-blue p-4 rounded-xl mb-[1rem] lg:sticky top-[6rem] h-fit w-full ">
            <div>
              <h1 className=" mb-2">{coures.categray}</h1>
              <strong>${coures.price} USD</strong>
            </div>
            <div className=" border-[0.2px] mb-4 mt-4 " />
            <div className=" flex flex-col gap-4">
              <h1 className=" flex items-center gap-2">
                {" "}
                <span>
                  {" "}
                  <Image
                    src={"/course/play.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />{" "}
                </span>{" "}
                22 hours on-demand video
              </h1>
              <h1 className=" flex items-center gap-2">
                {" "}
                <span>
                  {" "}
                  <Image
                    src={"/course/exercises.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />{" "}
                </span>{" "}
                19 coding exercises
              </h1>
              <h1 className=" flex items-center gap-2">
                {" "}
                <span>
                  {" "}
                  <Image
                    src={"/course/articles.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />{" "}
                </span>{" "}
                15 articles
              </h1>
              <h1 className=" flex items-center gap-2">
                {" "}
                <span>
                  {" "}
                  <Image
                    src={"/course/download.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />
                </span>{" "}
                Downloadable Files: {coures.numLesson}
              </h1>
              <h1 className=" flex items-center gap-2">
                {" "}
                <span>
                  {" "}
                  <Image
                    src={"/course/certifcate.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />{" "}
                </span>{" "}
                Certificate of completion
              </h1>
            </div>
            <button className=" w-full cursor-pointer px-4 py-2 rounded-full mt-8 bg-primary text-white hover:bg-secondary  duration-300">
              Book a Course
            </button>
          </div>

          <div>
            <Image
              src={coures.image}
              alt=""
              width={1000}
              height={1000}
              className=" rounded-xl"
            />
            <div className=" mt-[3rem] mb-[3rem]">
              <h1 className=" font-semibold text-2xl mt-[1rem] mb-[1rem]">
                About the Course
              </h1>
              <p>
                This course dives deep into advanced digital marketing
                strategies to help businesses and individuals maximize their
                online presence. You’ll learn proven techniques in SEO, social
                media marketing, paid advertising, email automation, and
                conversion optimization. Through real-world case studies and
                hands-on exercises, you’ll gain the skills needed to create
                successful marketing campaigns that drive traffic, engagement,
                and revenue.
              </p>
            </div>
            <div className=" mt-[3rem] mb-[3rem]">
              <h1 className=" font-semibold text-2xl mt-[1rem] mb-[1rem]">
                You Will be Able to know:
              </h1>
              <p>
                By the end of this course, you will have a solid understanding
                of key concepts and practical skills that you can apply
                immediately. You will be able to confidently implement
                strategies, use industry tools, and solve real-world problems
                with ease.
              </p>

              <ul className=" mx-[3rem] list-disc flex flex-col gap-2	">
                <li>
                  How to optimize websites for search engines (SEO) and improve
                  rankings
                </li>
                <li>
                  The secrets of successful social media marketing and paid
                  advertising
                </li>
                <li>
                  Effective email marketing automation to nurture leads and
                  boost conversions
                </li>
                <li>
                  How to analyze marketing data and optimize campaigns for
                  maximum ROI
                </li>
              </ul>
            </div>
            <div className=" mt-[3rem] mb-[3rem]">
              <h1 className=" font-semibold text-2xl mt-[1rem] mb-[1rem]">
                Prerequisite:
              </h1>

              <ul className=" mx-[3rem] list-disc flex flex-col gap-2	">
                <li>
                  Basic understanding of digital marketing concepts is helpful
                  but not required
                </li>
                <li>
                  Familiarity with social media platforms (Facebook, Instagram,
                  LinkedIn, etc.)
                </li>
                <li>No prior coding or technical skills are necessary</li>
              </ul>
            </div>
            <div className=" mt-[3rem] mb-[3rem]">
              <h1 className=" font-semibold text-2xl mt-[1rem] mb-[1rem]">
                Who Is This Course For?
              </h1>
              <ul className=" mx-[3rem] list-disc flex flex-col gap-2	">
                <li>
                  Entrepreneurs and business owners looking to grow their brands
                  onlin
                </li>
                <li>
                  Marketing professionals wanting to enhance their digital
                  skills
                </li>
                <li>
                  Freelancers and content creators who want to generate more
                  engagement and leads
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
