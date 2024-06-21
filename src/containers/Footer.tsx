import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" z-30 flex flex-col items-center text-white w-full  bg-[#02529B] ">
      <div className=" text-white mt-10 font-bold text-3xl">RSAM</div>
      <div className="flex w-11/12 flex-col md:items-center md:justify-center  text-sm md:flex-row gap-8 font-light my-8 text-white">
        <div className=" cursor-pointer">
          {" "}
          <a href="#">Home</a>
        </div>
        <div className=" cursor-pointer">
          <a href="#">About</a>
        </div>
        <div className=" cursor-pointer">
          <a href="/">Program</a>
        </div>
        <div className=" cursor-pointer">
          <a href="#">Classes</a>
        </div>
        <div className=" cursor-pointer">
          <a href="#">Events</a>
        </div>
        <div className=" hidden cursor-pointer">Blog</div>
        <div className=" cursor-pointer">
          <Link href={`/`}>Contact</Link>
        </div>
      </div>
      <div className=" w-11/12 flex border-t pt-5  flex-col justify-center  items-center md:justify-between gap-10 my-6">
        <div className=" font-light text-sm">
          © 2024 RSAM.com all rights reserved
        </div>
      </div>
      <div className="  hidden absolute min-h-screen top-0  w-full">
        <img src="wave.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
