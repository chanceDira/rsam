"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyRow = () => {
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
      className="mt-20 md:mt-10 scroll-smooth flex flex-col items-center justify-center w-full  "
    >
      <div className=" md:w-4/5 flex flex-col">
        <div className="font-bold flex justify-center items-center  text-secondary-500">
          Why <span className=" text-primary-500 mx-2">Row by Row</span>{" "}
          Processing?
        </div>
        <div className=" text-secondary-500 text-lg md:text-center  md:text-2xl font-medium my-6">
          EnhancifAI processes your data row by row, offering unparalleled
          precision and scalability. This method allows for:
        </div>
      </div>

      <div className=" mt-2 md:mt-10 gap-6 grid grid-cols-1 md:grid-cols-3 text-secondary-500 font-light">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col items-center justify-center gap-5 bg-white shadow rounded-2xl p-6"
        >
          <div>
            <img src="detailed.svg" alt="" />
          </div>
          <div className=" font-semibold text-2xl">Detailed Analysis</div>
          <div className=" text-center text-secondary-400 text-sm">
            Each row is analyzed individually, ensuring no detail is overlooked.
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
            <img src="customized.svg" alt="" />
          </div>
          <div className=" font-semibold text-2xl">Customized Insights</div>
          <div className=" text-center text-secondary-400 text-sm">
            Tailor the analysis to meet your specific needs, whether it's
            identifying trends, classifying data, or extracting key information.
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
            <img src="efficiency.svg" alt="" />
          </div>
          <div className=" font-semibold text-2xl">Efficiency at Scale</div>
          <div className=" text-center text-secondary-400 text-sm">
            Handle large datasets effortlessly, with each prompt applied
            consistently across all rows.
          </div>
        </motion.div>
      </div>
      <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-20">
        <div className=" flex flex-row   text-xl  w-full md:w-1/3">
          <div className=" flex flex-row  ">
            <div className=" p-2 ">
              <img src="d_tick_circle.svg" alt="" />
            </div>
            <div>The Power of Prompts</div>
          </div>
        </div>
        <div className=" flex flex-col md:w-2/3">
          <div className="">
            At the heart of EnhancifAI's simplicity is the use of prompts to
            direct the analysis. Prompts are expressed in plain language and can
            encompass tasks typically reserved for complex algorithms or
            formulas. This approach democratizes data analysis, making it
            accessible regardless of your technical expertise.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRow;
