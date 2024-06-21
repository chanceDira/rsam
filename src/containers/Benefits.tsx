"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Benefits = () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({ scale: 1 });
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  // useEffect(() => {
  //   // Check if the viewport width is greater than a certain threshold (e.g., 768px for tablets)
  //   const isMobile = window.innerWidth <= 768;

  //   // If on mobile, skip animation
  //   if (inView && !hasAnimated && !isMobile) {
  //     controls.start({ scale: 1 });
  //     setHasAnimated(true);
  //   }
  // }, [controls, inView, hasAnimated]);
  const initialScale =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 0;

  return (
    <div
      id="description"
      className="mt-20 md:mt-10 scroll-smooth flex flex-col items-center justify-center w-11/12 md:w-full  "
    >
      <div className=" w-4/5 flex flex-col">
        <div className="font-bold flex justify-center items-center  text-secondary-500">
          <span className=" text-primary-500 mr-2">Benefits </span>of Using
          EnhancifAI
        </div>
      </div>

      <div className=" mt-10 gap-6 grid grid-cols-1 md:grid-cols-3 text-secondary-500 font-light">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col items-center justify-center gap-5 bg-white shadow rounded-2xl p-6"
        >
          <div>
            <img src="expertise.svg" alt="" />
          </div>
          <div className=" font-semibold text-center text-xl">
            No Technical Expertise Required
          </div>
          <div className=" text-center text-secondary-400 text-sm">
            EnhancifAI's intuitive prompt system means you don't need to be a
            data scientist to perform complex data analysis.
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col items-center justify-center gap-5 bg-white shadow rounded-2xl p-6"
        >
          <div>
            <img src="rapid.svg" alt="" />
          </div>
          <div className=" font-semibold text-xl">Rapid Insights</div>
          <div className=" text-center text-secondary-400 text-sm">
            Transform your data into actionable insights quickly, allowing for
            faster decision-making and productivity.
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col items-center justify-center gap-5 bg-white shadow rounded-2xl p-6"
        >
          <div>
            <img src="analysis.svg" alt="" />
          </div>
          <div className=" font-semibold text-xl">Scalable Analysis</div>
          <div className=" text-center text-secondary-400 text-sm">
            From small datasets to large-scale data projects, EnhancifAI handles
            your data with the same ease and precision.
          </div>
        </motion.div>
      </div>
      <div className=" text-secondary-500 text-lg md:text-2xl md:text-center   font-medium my-8">
        Welcome to the future of data analysis, where EnhancifAI empowers you to
        make the most of your data with just a few clicks. Start exploring the
        possibilities today and see how your data can work harder for you.
      </div>
      <div>
        <Link href='/signup'>
        <div className="  text-white w-fit flex flex-row items-center gap-2 text-xs font-semibold bg-primary-500 px-4 md:px-7 py-3 cursor-pointer rounded-full">
          <div>Start free trial</div>
          <div>
            <img src="rightarrow.png" alt="" className=" h-3" />
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Benefits;
