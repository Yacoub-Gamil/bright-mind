"use client";
import Slider from "react-slick";
import ComponentSlider from "./ComponentSlider";
import { MdDeveloperBoard } from "react-icons/md";
import { PiHandbagFill } from "react-icons/pi";

function HeroSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    cssEase: "linear",
  };

  return (
    <div className=" grid grid-cols-1 md:max-w-[80%] mx-auto p-4 lg:grid-cols-2 gap-6 ">
      <div className=" text-3xl md:text-5xl font-semibold md:flex justify-center items-center">
        <h1 className=" italic ">
          Explore Course <br />
          <span className=" text-primary">Categories</span>
        </h1>
      </div>
      <div className="slider-container">
        <Slider {...settings} className="">
          <ComponentSlider backGround=" bg-light-green">
            <MdDeveloperBoard className=" capitalize text-3xl text-primary" />
            <div>
              <h1 className=" text-2xl">development</h1>
              <p>20 courses</p>
            </div>
          </ComponentSlider>

          <ComponentSlider backGround=" bg-light-yellow">
            <MdDeveloperBoard className=" capitalize text-3xl text-primary" />
            <div>
              <h1 className=" text-2xl">Design</h1>
              <p>22 Courses</p>
            </div>
          </ComponentSlider>

          <ComponentSlider backGround=" bg-light-blue">
            <MdDeveloperBoard className=" capitalize text-3xl text-primary" />
            <div>
              <h1 className=" text-2xl">Digital Marketing</h1>
              <p>15 Courses</p>
            </div>
          </ComponentSlider>

          <ComponentSlider backGround=" bg-light-orange">
            <PiHandbagFill className=" capitalize text-3xl text-primary" />
            <div>
              <h1 className=" text-2xl">Business</h1>
              <p>10 Courses</p>
            </div>
          </ComponentSlider>
        </Slider>
      </div>
    </div>
  );
}

export default HeroSlider;
