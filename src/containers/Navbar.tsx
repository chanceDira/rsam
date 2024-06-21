"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

// import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-scroll";

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState<string | null>('')

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    window.localStorage.clear();
    router.push('/')
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    setToken(window.localStorage.getItem("token"))
  }, [])

  return (
    <div className="  fixed  z-40  flex w-full md:w-full flex-row items-center justify-between shadow bg-white l  ">
      <div className=" p-4  md:p-4 md:px-8 flex flex-row items-center justify-center gap-2">
        <div className=" text-2xl font-bold">
          <a href="/">
         <img src="rsamlogo.svg" alt="" />
          </a>
        </div>
      </div>

      <div className=" p-4  md:p-4 md:px-8 hidden md:block  md:flex flex-row items-center justify-center gap-20">
        <div className="flex flex-row gap-8 text-sm  text-secondary-500">
          <div className="flex cursor-pointer flex-col hover:text-primary-500 transition"> 
            <a href="#">Home</a>
          </div>
          <div className=" cursor-pointer  hover:text-primary-500">
            <a href="#">About</a>
          </div>
          <div className=" cursor-pointer  hover:text-primary-500">
            <a href="/">Program</a>
          </div>
          <div className=" cursor-pointer hover:text-primary-500">
            <a href="#">Classes</a>
          </div>
          <div className=" cursor-pointer hover:text-primary-500">
            <a href="#">Events</a>
          </div>
          <div className=" cursor-pointer hover:text-primary-500">
            <a href="#">Contact</a>
          </div>
         
        </div>

        <div className=" flex flex-row items-center gap-8">
       

<div  onClick={logout} className=" hover:shadow-lg cursor-pointer bg-[#02529B] rounded-full p-0.5 text-sm  text-white">
                <div className=" px-6 py-2 font-bold rounded-full">
                  Join Now
                </div>
            </div>

    

        </div>
      </div>

      <div className= " absolute md:hidden w-full ">
        <div  className=" flex justify-end">
          <img
            src={`${showMenu ? "close" : "menu"}.svg`}
            alt=""
            className=" w-10 h-10"
          />
        </div>
        <div
          className={`${
            showMenu ? "" : "hidden"
          }   bg-primary-100 fixed  bg-opacity-90 z-50 right-0 min-h-screen w-full rounded-md p-8 flex flex-col justify-between `}
        >
          <div className=" flex flex-col gap-10 text-2xl font-bold mt-20  text-secondary-400">

          <div onClick={handleShowMenu}>Home</div>
          <div onClick={handleShowMenu}>
            <a href="#description">What is EnhancifAI</a>
          </div>
          <div onClick={handleShowMenu}>
            <a href="/get-started">Getting started</a>
          </div>
          <div onClick={handleShowMenu}>
            <a href="#usecase">Use cases</a>
          </div>
          <div onClick={handleShowMenu}>
            <a href="#pricing">Pricing</a>
          </div>
          <div onClick={handleShowMenu}>
            <a href="#faq">FAQ</a>
          </div>
          <div className=" hidden" onClick={handleShowMenu}>Blog</div>
          </div>


          <div className=" mb-20 flex flex-col gap-4">

          {token ?
          <>
             <div className=" font-bold  flex justify-center items-center text-primary-500">
          <Link href="/execution">Data Submission Portal</Link>
        </div>
              <div onClick={logout} className=" cursor-pointer border  from-[#8FEEFC] to-[#0048FF] bg-gradient-to-r rounded-full p-0.5 text-sm  text-black">
                <div className=" bg-white flex justify-center items-center px-6 py-2 font-bold rounded-full">
                  Logout
                </div>
            </div>
          </>
          :
          <>
           <div className=" font-bold  flex justify-center items-center text-primary-500">
          <Link href="/signup">Sign Up</Link>
        </div>
              <div className=" cursor-pointer border  from-[#8FEEFC] to-[#0048FF] bg-gradient-to-r rounded-full p-0.5 text-sm  text-black">
              <Link href="/login">
                <div className=" bg-white flex justify-center items-center px-6 py-2 font-bold rounded-full">
                  Log In
                </div>
              </Link>
            </div>
            </>
          }

          
      
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
