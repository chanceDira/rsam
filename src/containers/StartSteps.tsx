"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Notify from "@/components/Notify";
import axios from "axios";
import { useRouter } from "next/navigation";

type StepType = {
  step: string;
  title: string;
  subtitle: string;
  description: string;
};

export const steps: StepType[] = [
  {
    step: "01",
    title: "Data Preparation",
    subtitle: "Ready Your Data",
    description: `Organize your data into a CSV or Excel file, setting the stage for AI analysis without complex setups`,
  },
  {
    step: "02",
    title: "Create Prompts",
    subtitle: "Prepare Your Prompts",
    description:
      "Craft prompts in a separate file to direct the AI, transforming your analysis goals into clear, actionable instructions",
  },
  {
    step: "03",
    title: "Upload to EnhancifAI",
    subtitle: "Initiate AI",
    description:
      "Effortlessly upload your data and prompt files through our intuitive interface, kick-starting your AI-powered analysis",
  },
  {
    step: "04",
    title: "Download New File",
    subtitle: "Unlock Insights",
    description:
      "Receive your data file, now enriched with AI-generated insights and additional columns, ready for your next steps. ",
  },
];

const StartSteps = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const router = useRouter();

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({ scale: 1 });
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  const initialScale =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 0;

  const handleDownloadTemplates = async (e: any) => {
    e.preventDefault();
    // console.log("fileUrl: ", fileUrl);
    try {
      const response = await axios.get(
        // `https://enhancifai-backend-vmkobip5sa-uc.a.run.app/downloads/prompts-template`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/downloads/prompts-template`,
        {
          headers: {
            accept: "application/json",
            // "x-api-key": `vyNfHcGdsHplKuyBPVfPJgcnUBtZonYg`,
            "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Access-Control-Allow-Origin": "*",
            token: window.localStorage.getItem("token"),
          },
          responseType: "arraybuffer",
        }
      );

      if (response?.status == 401) {
        Notify("Session expired, Please login again", "error");
        setTimeout(() => {
          window.localStorage.clear();
          router.push("/signin");
        }, 3000);
        return;
      }

      // if (response) {
      //   const blob = new Blob([response.data], { type: "text/csv" });
      //   const url = window.URL.createObjectURL(blob);
      //   const a = document.createElement("a");
      //   a.href = url;
      //   a.download = `Sample_prompt`;
      //   a.click();
      //   window.URL.revokeObjectURL(url);
      // }
      if (response) {
        const arrayBuffer = response.data;
        const data = new Uint8Array(arrayBuffer);
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Sample_prompt.xlsx`; 
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.log(error);
      Notify("Something went wrong", "error");
    }
  };

  return (
    <div
      ref={ref}
      id="howitworks"
      className=" md:mt-10 mt-20  flex flex-col relative items-center justify-center w-11/12 md:w-full  "
    >
      <div className="font-semibold text-3xl text-primary-500">
        Getting Started
      </div>

      <div className="hidden md:block md:grid grid-cols-1 md:grid-cols-4  w-full gap-6 mt-10">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-3"
        >
          <div>
            <img src="step21.svg" alt="" />
          </div>
          <div className=" font-bold text-primary-500 text-lg text-center mt-4">
            Prepare Your Data
          </div>

          <div className=" font-light text-sm mt-2 text-center text-secondary-400 ">
            Ensure your data is in Excel, CSV, or Google Sheets format, with
            each row representing a unique record.
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
        >
          <img src="step11.svg" alt="" />
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-3"
        >
          <div>
            <img src="step22.svg" alt="" />
          </div>
          <div className=" font-bold text-primary-500 text-lg text-center mt-4">
            Create Your Prompt File
          </div>

          <div className=" font-light text-sm mt-2 text-center text-secondary-400 ">
            Follow the formatting guidelines above to prepare your prompts.
            Remember, each prompt translates into a new column of analyzed data
            in your output file.
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
        >
          <img src="step12.svg" alt="" />
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
        >
          <img src="step13.png" alt="" />
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-3"
        >
          <div>
            <img src="step23.svg" alt="" />
          </div>
          <div className=" font-bold text-primary-500 text-lg text-center mt-4">
            Upload and Analyze
          </div>

          <div className=" font-light text-sm mt-2 text-center text-secondary-400 ">
            With your data and prompt files ready, upload them to EnhancifAI.
            Our platform will process your data row by row, applying each prompt
            as instructed.
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
        >
          <img src="step14.png" alt="" />
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-3"
        >
          <div>
            <img src="step24.svg" alt="" />
          </div>
          <div className=" font-bold text-primary-500 text-lg text-center mt-4">
            Download Enhanced Data
          </div>
          <div className=" font-light text-sm mt-2 text-center text-secondary-400 ">
            Retrieve your file, now enriched with new columns of AIgenerated
            insights tailored to your prompts.
          </div>
        </motion.div>
      </div>

      <div className="md:hidden grid grid-cols-1 md:grid-cols-2  w-full gap-8 mt-4">
      <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center px-3 py-6"
        >
          <div>
            <img src="step21.svg" alt="" />
          </div>
          <div className=" font-bold text-primary-500 text-lg text-center mt-4">
            Prepare Your Data
          </div>

          <div className=" font-light text-sm mt-2 text-center text-secondary-400 ">
            Ensure your data is in Excel, CSV, or Google Sheets format, with
            each row representing a unique record.
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
        >
          <img src="step111.svg" alt="" />
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center px-3 py-6"
        >
          <div>
            <img src="step22.svg" alt="" />
          </div>
          <div className=" font-bold text-primary-500 text-lg text-center mt-4">
            Create Your Prompt File
          </div>

          <div className=" font-light text-sm mt-2 text-center text-secondary-400 ">
            Follow the formatting guidelines above to prepare your prompts.
            Remember, each prompt translates into a new column of analyzed data
            in your output file.
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
        >
          <img src="step121.svg" alt="" />
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-3"
        >
          <div>
            <img src="step23.svg" alt="" />
          </div>
          <div className=" font-bold text-primary-500 text-lg text-center mt-4">
            Upload and Analyze
          </div>

          <div className=" font-light text-sm mt-2 text-center text-secondary-400 ">
            With your data and prompt files ready, upload them to EnhancifAI.
            Our platform will process your data row by row, applying each prompt
            as instructed.
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
        >
          <img src="step131.svg" alt="" />
        </motion.div>

   

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-3"
        >
          <div>
            <img src="step24.svg" alt="" />
          </div>
          <div className=" font-bold text-primary-500 text-lg text-center mt-4">
            Download Enhanced Data
          </div>
          <div className=" font-light text-sm mt-2 text-center text-secondary-400 ">
            Retrieve your file, now enriched with new columns of AIgenerated
            insights tailored to your prompts.
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
        >
          <img src="step141.png" alt="" />
        </motion.div>
      </div>
      <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10 md:mt-20">
        <div className=" flex flex-row   text-xl  w-full md:w-1/3">
          <div className=" flex flex-row  ">
            <div className=" p-2 ">
              <img src="d_tick_circle.svg" alt="" />
            </div>
            <div>Sample Prompt File</div>
          </div>
        </div>
        <div className=" flex flex-col md:w-2/3">
          <div className="">
            To help you get started, we offer a downloadable sample prompt file.
            This template serves as a practical example to guide the creation of
            your own prompts, ensuring a smooth EnhancifAI experience.
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center">
        <div className=" w-full md:w-fit  mt-10 cursor-pointer border  from-[#8FEEFC] to-[#0048FF] bg-gradient-to-r rounded-full p-0.5 text-sm  text-black">
          <div
            onClick={handleDownloadTemplates}
            className=" bg-white w-full flex justify-center items-center px-6 py-2 text-secondary-500 font-bold rounded-full"
          >
            D/L sample prompt file
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSteps;
