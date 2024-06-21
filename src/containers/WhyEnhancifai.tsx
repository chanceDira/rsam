"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

type CardType = {
  svg: string;
  title: string;
  subTitle: string;
  desc: string;
};

export const cards: CardType[] = [
  {
    svg: "simple.svg",
    title: "Unlock Insights with AI",
    subTitle: "Elevate your data analysis effortlessly",
    desc: "EnhancifAI leverages advanced AI to interpret your data, generating actionable insights from simple prompts. Transform raw data into strategic assets, making informed decisions faster and with greater confidence.",
  },
  {
    svg: "customize.svg",
    title: "Simplify Complex Data Tasks",
    subTitle: "Navigate data complexity with ease",
    desc: `Whether it's extracting trends, performing predictive analysis, or uncovering hidden patterns, EnhancifAI streamlines the process. Upload your dataset, define your objective through a prompt, and let AI do the heavy lifting.`,
  },
  {
    svg: "quality.svg",
    title: "Data Enrichment for All",
    subTitle: "Broaden your analytical horizons",
    desc: "EnhancifAI enhances your datasets by adding columns, tailored to your specific queries. From augmenting market research to deepening scientific research, our platform adapts to your diverse needs, making your data more comprehensive and informative.",
  },
  {
    svg: "power.svg",
    title: "Accelerate Innovation",
    subTitle: "Boost productivity and foster innovation",
    desc: "EnhancifAI not only speeds up your data processing tasks but also inspires new approaches to problem-solving. Explore novel ideas, refine strategies, and achieve breakthroughs in your field, all while saving valuable time.",
  },
];

const WhyEnhancifai = () => {
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
    <div className="flex flex-col py-12 relative items-center justify-between w-11/12 md:w-4/5  mt-20 gap-10 ">
    <div className="font-bold text-secondary-500">
      Why <span className=" text-primary-500">EnhancifAI?</span>
    </div>
    <div className="md:w-4/5 text-secondary-500  font-medium text-lg md:text-center  md:text-2xl">
      Embark on your journey to data enhancement with today and transform your
      datasets into powerful assets.
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {cards.map((card: CardType) => (
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className="bg-white relative shadow-md flex flex-col items-center p-6 rounded-2xl text-secondary-500"
        >
          <div>
            <img src={`${card.svg}`} alt="" />
          </div>
          <div className="font-medium text-center text-xl my-6 px-4">
            {card.title}
          </div>
          <div className="flex-grow flex flex-col justify-between">
            {" "}
            {/* Added flex-grow and flex-col */}
            <div className=" font-light text-secondary-400 text-sm flex-grow">
              {" "}
              {/* Added flex-grow */}
              {card.desc}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <Link href='/signup'>
    <div className=" text-white w-fit flex flex-row items-center gap-2 text-sm font-semibold bg-primary-500 px-7 py-3 cursor-pointer rounded-full">
      <div>Start free trial</div>
      <div>
        <img src="rightarrow.png" alt="" />
      </div>
    </div>
    </Link>
    <div></div>
  </div>
  );
};

export default WhyEnhancifai;
