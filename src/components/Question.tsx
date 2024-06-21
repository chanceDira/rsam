"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

interface questionProps {
  question: string;
  answer: string;
}

const Question = (props: questionProps) => {
  const [showQst, setShowQst] = useState(false);

  const handleShowQst = () => {
    setShowQst(!showQst);
  };
  return (
    <div className=" bg-white  w-full rounded-md">
      <div
        onClick={handleShowQst}
        className="flex flex-row border-b pb-5 border-secondary-100 items-center justify-between cursor-pointer"
      >
        <div className=" font-semibold text-secondary-400">{props.question}</div>
        <div className=" cursor-pointer">
          {/* <Icon icon={`ep:arrow-${showQst ? "up" : "down"}-bold`} /> */}
          {showQst ? <img src="uparrow.svg" alt="" /> : <img src="downarrow.svg" />}
        </div>
      </div>
      <div
        className={`${showQst ? "" : "hidden"} mt-2  rounded-md  text-secondary-400 font-light`}
      >
        {props.answer}
      </div>
    </div>
  );
};

export default Question;
