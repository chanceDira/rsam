import Link from "next/link";
import React from "react";

const Footerv2 = () => {
  return (
    // <div className="flex flex-col items-center text-white w-full  bg-secondary-600 ">
    //   <div className=" w-10/12 grid grid-cols-1 md:grid-cols-4 gap-10 my-20">
    //     <div className="flex flex-col">
    //       <div className=" font-bold text-4xl">EnhancifAI</div>
    //       <div className=" text-secondary-200 font-light text-sm mt-4">
    //         EnhancifAI transforms and "enhancifies" your data with AI, turning
    //         any CSV, Excel, or Google Sheets file into a rich resource.
    //       </div>
    //     </div>
    //     <div className="flex flex  font-light text-secondary-200 gap-4 text-sm flex-col">
    //       <div className=" font-bold text-lg text-white">Product</div>
    //       <div>ChatBot tab</div>
    //       <div>Intergration tab</div>
    //       <div>Pricing</div>
    //       <div>Live Chat</div>
    //     </div>
    //     <div className="flex flex-col flex-row font-light text-secondary-200 gap-4 text-sm">
    //       <div className=" font-bold text-lg text-white">Company</div>
    //       <div>About us</div>
    //       <div>Service</div>
    //       <div>Blog</div>
    //       <div>FAQ</d
    //     <div className="flex flex-col font-light text-secondary-200 gap-4 text-sm">
    //       <div className=" font-bold text-lg text-white">Use Cases</div>
    //       <div>Whatsapp</div>
    //       <div>Instergram</div>
    //       <div>TikTok</div>
    //       <div>Website</div>
    //     </div>

    <div className=" z-30 flex flex-col items-center text-white w-full  bg-[#151A2D] ">
      <div className=" text-white mt-10 font-bold text-3xl">
      EnhancifAI
      </div>
      <div className="flex w-11/12 flex-col md:items-center md:justify-center  text-sm md:flex-row gap-8 font-light my-8 text-white">
      <div className=" cursor-pointer">  <a href="/#intro">Home</a></div>
      <div className=" cursor-pointer"><a href="/#howitworks">How it Works</a></div>
      <div className=" cursor-pointer"><a href="/get-started">Getting Started</a></div>
      <div className=" cursor-pointer"><a href="/#pricing">Pricing</a></div>
      <div className=" cursor-pointer"><a href="/#faq">FAQ</a></div>
        <div className=" hidden cursor-pointer">Blog</div>
        <div className=" cursor-pointer">
        <Link href={`/terms`}>
          Terms Of Use
        </Link>
        </div>
        <div className=" cursor-pointer">
        <Link href={`/privacy`}>
          Privacy Policy
          </Link>
        </div>
      </div>
      <div className=" w-11/12 flex border-t pt-5  flex-col justify-center  items-center md:justify-between gap-10 my-6">
     
        <div className=" font-light text-sm">
          © 2024 EnhancifAI.com all rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footerv2;
