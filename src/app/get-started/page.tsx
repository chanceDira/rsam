"use client"

import Benefits from "@/containers/Benefits";
import Footerv2 from "@/containers/Footerv2";
import Formatting from "@/containers/Formatting";
import Navbar from "@/containers/Navbar";
import Navbarv2 from "@/containers/Navbarv2";
import StartSteps from "@/containers/StartSteps";
import WhyRow from "@/containers/WhyRow";
import { loadGoogleAnalytic } from "@/utils/GoogleAnalytics";
import React, { useEffect } from "react";

const page = () => {


  return (
    <div className="flex min-h-screen flex-col items-center w-full bg-primary-100 ">
      <Navbarv2 />
      <div className=" w-11/12 md:w-9/12 my-10 text-secondary-500 font-light flex flex-col justify-center items-center  gap-3 mt-40">
        <div className=" text-4xl font-bold text-center flex justify-center text-primary-500 items-center">
          Getting Started with EnhancifAI
        </div>
        <div className="  w-full text-secondary-400 text-lg mx-auto my-4">
          Welcome to EnhancifAI, your gateway to unlocking the full potential of
          your data through AI-driven analysis. This guide will help you get
          started, suring you can leverage EnhancifAI's capabilities to simplify
          complex data tasks such as classification, extraction, and algorithmic
          calculations with ease.
        </div>
        <div className={`h-44 md:h-96 w-full rounded-xl`}>
          <div>
            <img src="img10.png" alt="" className=" " />
          </div>
        </div>

        <div className=" w-full ">
          <WhyRow />
        </div>

        <Formatting />
        <StartSteps />
        <Benefits />
      </div>
      <Footerv2 />
    </div>
  );
};

export default page;
