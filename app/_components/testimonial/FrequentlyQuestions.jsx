"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

function FrequentlyQuestions({ questions, index }) {
  const { question, answer, id } = questions;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={` overflow-hidden ${
          !isOpen
            ? "h-[4rem] duration-500 bg-stone-50"
            : "h-full bg-primary text-white"
        } capitalize duration-500 cursor-pointer  p-4 rounded-2xl`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className="  text-[1rem] md:text-xl flex items-center justify-between">
          <h1 className=" font-semibold">{question}</h1>
          {!isOpen ? <LuPlus /> : <IoMdClose />}
        </div>
        <div className=" mt-[1.6rem] duration-300 border-t-[0.1px]  p-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default FrequentlyQuestions;
