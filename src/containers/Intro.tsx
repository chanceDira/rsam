"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({ scale: 1 });
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  return (
    <div
      id="intro"
      className=" relative flex w-full  flex-col min-h-screen items-center justify-center   "
    >

<div className=" absolute  w-full min-h-screen  ">
        <img src="stage.png" alt="" className=" w-full min-h-screen object-cover" />
      </div>

  
 
      <div className=" flex flex-col min-h-screen items-center justify-center w-11/12 md:w-3/5 z-30 ">
      <div className=" text-white font-light text-xl f  md:text-xl  my-6">
      Welcome to Rwanda School of Create Arts and Music
        </div>
        <div className=" text-white mt-32 w-2/3 text-center  md:mt-0 font-bold text-3xl md:text-5xl  ">
        Where Words Leave Off, Music Begins
        </div>
      
    <div className=" bg-[#F0E12F] font-semibold text-[#02529B] rounded-full px-12 py-2  cursor-pointer mt-6">
      Join Now
    </div>
      
      </div>

     
    </div>
  );
};

export default Intro;
