"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const HowItWorksV2 = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({ scale: 1 });
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  const initialScale =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 0;

  return (
    <div
    ref={ref}
    id="howitworks"
    className=" md:mt-2 mt-20  flex flex-col relative items-center justify-center w-11/12 md:w-9/12  "
  >


    <div className="md:w-4/5  text-lg md:text-center  md:text-2xl my-6 text-secondary-500 font-medium">
     Music in the Air
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-8 mt-4">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
        className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-10"
      >
    <div className=" text-sm leading-7 font-light">
    In summer 2013, Juno award winning artist Jacques Murigande, a.k.a Mighty Popo,
answered a call to develop a concept for a public Music School in Rwanda. Mighty
Popo, one of Canada’s respected musician, is an Artist whose music reflects his love
of his native country and the African continent, traditional music and his immersion
in a world culture. A member of the 2004 Juno Award-winning band African Guitar
Summit, he’s received praise for his wonderful solo work, performed at the Canadian
edition of Bob Geldof’s international Live 8 concerts and received a Canadian Folk
Music award for his 2007 album Muhazi.
    </div>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
      >
        <img src="Nyundo-Music.jpg" alt="" className=" rounded-3xl" />
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
      >
        <img src="nyu.jpg" alt="" className=" rounded-3xl" />
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
        className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-10"
      >
    <div className=" text-sm leading-7 font-light">
    March 10th 2014 marked the establishment of the first vocational public music school
in Rwanda located in Nyundo, Rubavu western Rwanda. The three-year music
program supports professional development and enhances capacity and transferable
skills. As of January 2018 the Music School has relocated to Muhanga southern
district and took the name Rwandan School of Creative Arts and Music. “ RSAM”
        </div>
      
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
        className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-10"
      >
    <div className=" text-sm leading-7 font-light">
    The Rwandan School of Creative Arts and Music, with the support and involvement
of the Government of Rwanda and the School’s partners, will help Rwandan artists
promote their own music and develop a market for it, bringing the world’s attention to
their art and culture. RSAM is slowly but surely developing a local music
infrastructure and industry bridging the gap between old and new, rural and urban. 
     </div>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
      >
        <img src="here.jpg" alt="" className=" rounded-3xl" />
      </motion.div>
    </div>

    <div className="hidden grid grid-cols-1 md:grid-cols-2  w-full gap-8 mt-4">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
        className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-10"
      >
        <div>
          <img src="step1_icon.svg" alt="" />
        </div>
        <div className=" font-bold text-primary-500 text-2xl text-center mt-4">
          Set the Stage for Insight
        </div>
        <div className=" font-bold my-2">Data & Prompt Preparation</div>
        <div className=" font-light text-center">
          Organize your dataset and craft precise prompts to guide the
          analysis. A well-prepared foundation is key to unlocking targeted,
          transformative insights.
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
      >
        <img src="step1.svg" alt="" />
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
        className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-10"
      >
        <div>
          <img src="step2_icon.svg" alt="" />
        </div>
        <div className=" font-bold text-primary-500 text-2xl mt-4">
          Start Analysis
        </div>
        <div className=" font-bold my-2">Upload and Process</div>
        <div className=" font-light text-center">
          With your data and prompts ready, upload them to EnhancifAI. Our
          platform analyzes every row, turning data into actionable
          intelligence.
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
      >
        <img src="step2.svg" alt="" />
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
        className=" bg-white shadow-md rounded-3xl flex flex-col items-center justify-center p-10"
      >
        <div>
          <img src="step3_icon.svg" alt="" />
        </div>
        <div className=" font-bold text-primary-500 text-2xl mt-4">
          Unlock New Insights
        </div>
        <div className=" font-bold my-2">Download Enhanced File</div>
        <div className=" font-light text-center">
          Access your enriched dataset, now complete with AI-driven insights
          for every row. Explore new opportunities and strategies informed by
          AI.
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
      >
        <img src="step3.svg" alt="" />
      </motion.div>
    </div>
  </div>
  );
};

export default HowItWorksV2;
