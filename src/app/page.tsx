"use client";

import Contactus from "@/containers/Contactus";
import Description from "@/containers/Description";
import ExplainerVideo from "@/containers/ExplainerVideo";
import FAQs from "@/containers/FAQs";
import FirstNum from "@/containers/FirstNum";
import Footer from "@/containers/Footer";
import HowItWorks from "@/containers/HowItWorks";
import HowItWorksV2 from "@/containers/HowItWorksV2";
import Intro from "@/containers/Intro";
import Navbar from "@/containers/Navbar";
import Note from "@/containers/Note";
import Pricing from "@/containers/Pricing";
import Show from "@/containers/Show";
import Value from "@/containers/Value";
import Ways from "@/containers/Ways";
import WhatYouGet from "@/containers/WhatYouGet";
import WhyEnhancifai from "@/containers/WhyEnhancifai";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
   


  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-[#FDF3EA] ">
     <Navbar />
     <Intro />
     <FirstNum />
     <Description />
     <ExplainerVideo />
     <Show />
     {/* <HowItWorks /> v2 */}
     <HowItWorksV2 />
     {/* <WhatYouGet /> */}
     {/* <WhyEnhancifai /> */}
     {/* <Ways /> */}
     {/* <Value /> v2 */}
     {/* <Pricing /> */}
     {/* <FAQs /> */}
     <Contactus />
     {/* <Note /> */}
     <Footer />
    </main>
  );
}
