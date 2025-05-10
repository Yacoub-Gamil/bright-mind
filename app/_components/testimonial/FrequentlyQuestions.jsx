"use client";
import { useEffect, useRef, useState } from "react";
import { LuPlus } from "react-icons/lu";

function FrequentlyQuestions({ questions, index }) {
  const { question, answer, id } = questions;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={` overflow-hidden ${
          !isOpen
            ? "h-[3.5rem] duration-500 bg-stone-50"
            : "h-full bg-primary text-white"
        } capitalize duration-500 cursor-pointer  p-4 rounded-2xl`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className=" text-xl flex items-center justify-between">
          <h1 className="">{question}</h1>
          <LuPlus />
        </div>
        <div className=" duration-300 border-t-[0.1px] mt-[1rem] p-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default FrequentlyQuestions;
