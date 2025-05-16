import Image from "next/image";

export const metadata = {
  title: "contact-us",
};

function page() {
  return (
    <section className="container mx-auto p-4">
      <div className=" mt-[4rem] text-center">
        <h1 className="  text-4xl md:text-5xl font-semibold mb-2 lg:text-6xl">
          We&apos;re here to <span className=" text-primary">help!</span>{" "}
        </h1>
        <p>We want to hear from you. Let us know how we can help.</p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-[2rem] mb-[2rem] gap-3">
        <form className=" p-8 rounded-xl bg-stone-50 flex flex-col gap-4">
          <h1 className=" font-semibold text-3xl">Send us a Message</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consequat nibh sit amet elit tempor.
          </p>
          <div className=" grid grid-cols-2 gap-6">
            <div className=" flex flex-col gap-2">
              <label className=" font-semibold md:text-xl">Full Name</label>
              <input
                required
                type="text"
                placeholder="Full Name"
                className="bg-white w-full p-2 outline-[0.1px] outline-primary "
              ></input>
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" font-semibold md:text-xl">Email</label>
              <input
                required
                type="emil"
                placeholder="Email"
                className="bg-white w-full p-2 outline-[0.1px] outline-primary   "
              ></input>
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" font-semibold md:text-xl">Phone</label>
              <input
                required
                type="number"
                placeholder="Phone"
                className="bg-white no-spinner w-full p-2 outline-[0.1px] outline-primary  "
              ></input>
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" font-semibold md:text-xl">Date</label>
              <input
                required
                type="text"
                placeholder="Email"
                className="bg-white w-full p-2  outline-[0.1px] outline-primary "
              ></input>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <label className=" font-semibold md:text-xl">Message</label>
            <textarea
              required
              placeholder=" Message"
              maxLength={2000}
              minLength={500}
              className=" p-2 bg-white outline-[0.1px] outline-primary "
            />
            <button
              type="submit"
              className="bg-secondary p-2 rounded-3xl text-white md:max-w-[40%] mt-[1re]"
            >
              Submit
            </button>
          </div>
        </form>
        <div className=" flex flex-col justify-between gap-4">
          <div className=" bg-light-blue p-4 rounded-xl flex gap-4 ">
            <Image
              src={"/contact-us/image-1.svg"}
              alt=""
              width={50}
              height={50}
            />
            <div className=" flex flex-col gap-4">
              <h1 className=" text-2hello@brightmind.comxl font-semibold">
                Email us
              </h1>
              <p>Email us for scheduling</p>
              <strong>hello@brightmind.com</strong>
            </div>
          </div>
          <div className=" bg-light-orange p-4 rounded-xl flex gap-4 ">
            <Image
              src={"/contact-us/image-2.svg"}
              alt=""
              width={50}
              height={50}
            />
            <div className=" flex flex-col gap-4">
              <h1 className=" text-2hello@brightmind.comxl font-semibold">
                Visit our office
              </h1>
              <p>Visit us for scheduling</p>
              <strong>6391 Elgin St. Celina, Delaware 10299</strong>
            </div>
          </div>
          <div className=" bg-light-green p-4 rounded-xl flex gap-4 ">
            <Image
              src={"/contact-us/image-3.svg"}
              alt=""
              width={50}
              height={50}
            />
            <div className=" flex flex-col gap-4">
              <h1 className=" text-2hello@brightmind.comxl font-semibold">
                Contact us
              </h1>
              <p>Call us for scheduling</p>
              <strong>+(20) 121 0955 561</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
