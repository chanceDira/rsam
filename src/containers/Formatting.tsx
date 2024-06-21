"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Formatting = () => {
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
      className="mt-10 md:mt-10 scroll-smooth flex flex-col items-center justify-center w-full  "
    >
      <div className=" md:w-4/5 flex flex-col">
        <div className="font-bold flex justify-center items-center  text-secondary-500">
          Formatting the{" "}
          <span className=" text-primary-500 ml-2">Prompt File</span>
        </div>
        <div className=" text-secondary-500 text-lg md:text-center   md:text-2xl font-medium my-6">
          To ensure EnhancifAI processes your data correctly, the prompt file
          must be formatted properly. Here's how to structure your prompt file:
        </div>
      </div>

      <div className="  w-full overflow-x-auto">
        <table className=" mt-0 md:mt-10 min-w-full divide-y   divide-gray-200 text-secondary-500 rounded-lg border font-light bg-white">
          <thead className=" ">
            <tr>
              <th scope="col" className="  p-6 border-b w-1/2 md:w-1/4">
                <div className="flex flex-col font-semibold text-center text-secondary-400 text-lg">
                  <span>Column A</span>
                  <span>(Sequence)</span>
                </div>
              </th>

              <th
                scope="col"
                className="  p-6 border-b border-l border-r w-1/2 md:w-1/4"
              >
                <div className="  flex flex-col font-semibold text-center text-secondary-400 text-lg">
                  <span>Column B</span>
                  <span>(Columns for Analysis)</span>
                </div>
              </th>

              <th scope="col" className=" p-6 border-b border-r md:w-1/4">
                <div className="flex flex-col font-semibold text-center text-secondary-400 text-lg">
                  <span>Column C</span>
                  <span>(Prompt Text)</span>
                </div>
              </th>

              <th scope="col" className=" p-6 border-b md:w-1/4">
                <div className="flex flex-col font-semibold text-center text-secondary-400 text-lg">
                  <span>Column D</span>
                  <span>(Output Heading)</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className=" divide-y">
            <tr>
              <td className="  gap-5 p-6 flex flex-col justify-start items-center ">
                <div className="  text-secondary-400 text-sm">
                  Number your prompts sequentially.
                </div>
              </td>

              <td className=" items-center gap-5 p-6 border-l border-r  justify-start">
                <div className=" text-secondary-400 text-sm">
                  Specify which columns from your data file to analyze. Use
                  single column references (e.g., "A"), combine multiple columns
                  (e.g., "A+B+G"), or use "*" to indicate all columns.
                </div>
              </td>

              <td className=" relative gap-5 p-6 border-r">
                <div className=" text-secondary-400 text-sm absolute top-6">
                  Write the analysis instruction without line breaks. This could
                  range from "Classify customer feedback" to "Calculate average
                  sales for product X."
                </div>
              </td>

              <td className=" items-center gap-5 p-6 flex flex-col justify-start">
                <div className=" text-secondary-400 text-sm ">
                  Define the heading for the new column that will be added to
                  your output file based on the analysis.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" flex flex-col font-semibold items-center justify-center md:flex-row w-full gap-8 text-secondary-500 mt-10">
        Each row in your prompt file corresponds to a new column in the output,
        allowing you to expand your dataset with valuable insights.
      </div>
    </div>
  );
};

export default Formatting;
