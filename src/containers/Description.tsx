"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Description = () => {
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
  const initialScale = typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 0;
  
  return (
    <div
    id="description"
    className="bg-[#FDF3EA] mt-20 md:mt-0 scroll-smooth flex flex-col min-h-screen items-center justify-center w-11/12 md:w-4/5  "
  >


    <div className=" mt-2 md:mt-10 gap-6 grid grid-cols-1 md:grid-cols-2 text-secondary-500 font-light">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col items-center justify-center gap-5  rounded-2xl p-6"
      >
     <img src="sing.svg" alt="" />
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: initialScale }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col justify-center gap-5 rounded-2xl p-6"
      >
      <div className=" font-bold text-[#02529B] text-4xl">
      Empowering Children’s, Inspiring <span className=" text-[#F0E12F]">Futures</span>
      </div>
      <div className=" text-[#02529B]">
      Rwandan music is part of a continuum that constantly shape-shifts in subtle ways that
stretch over lifetimes and across borders. Its character has been enriched by its
traditions, by the contributions of exiled Rwandan artists and current sounds
influenced nowadays by Nigeria and the West. These have combined to create new
styles and sounds, based around signature danceable rhythms and complex vocal
patterns. 
      </div>
      <div className=" text-[#02529B]">
      Local homes and streets overflow with enchanting sounds: choirs, traditional
“imbyino” dance and songs, hip-hop, Afropop, Reggae and the Inanga (Rwandan
Zithar). This rich culture has been muted by the absence of a local music industry, so
the country’s music is not as well known as other African music.
      </div>
      <div className=" bg-[#02529B] w-fit text-white py-2 px-14 rounded-full cursor-pointer">
        Join Now
      </div>
      </motion.div>


    </div>
  </div>
  );
};

export default Description;
