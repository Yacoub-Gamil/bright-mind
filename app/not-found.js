import Link from "next/link";

function notFound() {
  return (
    <div className=" w-full h-[80vh] flex flex-col justify-center items-center ">
      <div className=" bg-stone-50  w-[40%] p-8 text-center">
        <h1 className=" text-primary text-2xl font-semibold  ">
          Page Not Found
        </h1>
        <Link
          className=" text-2xl capitalize mt-4 block p-2 px-4 bg-white  "
          href={"/"}
        >
          {" "}
          go back{" "}
        </Link>
      </div>
    </div>
  );
}

export default notFound;
