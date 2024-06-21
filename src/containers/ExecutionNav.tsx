import Notify from "@/components/Notify";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const ExecutionNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(
    "process.env.NEXT_PUBLIC_BASE_URL: ",
    process.env.NEXT_PUBLIC_BASE_URL
  );

  const handleDownloadTemplates = async (e: any) => {
    e.preventDefault();
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
          },
          responseType: "arraybuffer",
        }
      );

      if (response) {
        const blob = new Blob([response.data], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Sample_prompt`;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.log(error);
      Notify("Something went wrong", "error");
    }
  };

  return (
    <div className="fixed flex flex-row items-center justify-between w-11/12 md:w-10/12 z-30 bg-primary-100 rounded-md p-2 md:p-4 ">
      <div className=" cursor-pointer flex flex-row gap-2 items-center justify-center">
        <Link href="/">
          <div className=" text-2xl font-bold">
            <span className=" text-primary-500">Enhancif</span>
            <span className=" text-secondary-500">AI</span>
          </div>
        </Link>
      </div>

      <div className=" hidden md:block md:flex md:flex-row justify-center items-center gap-40">
        <div className="flex flex-row gap-10  text-secondary-500">
          <div className=" cursor-pointer font-bold">
            How to Request an API Key
          </div>
          <div className=" cursor-pointer font-bold">
        <Link href={`/instructions`}>
            Prompt File Instructions
          </Link>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div
            onClick={handleDownloadTemplates}
            className=" text-xs bg-primary-500 flex justify-center items-center px-4 py-2 rounded-md cursor-pointer text-white"
          >
            D/L Sample Prompt File
          </div>
          <div className=" text-white text-sm bg-primary-500 px-6 py-2 cursor-pointer rounded-md">
            {/* <Link href='/login'> */}
            Logout
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className="relative md:hidden">
        <div onClick={handleShowMenu} className="">
          <img
            src={`${showMenu ? "close" : "menu"}.svg`}
            alt=""
            className=" w-10 h-10"
          />
        </div>
        <div
          className={`${
            showMenu ? "" : "hidden"
          } w-80 absolute bg-white z-30 right-0 rounded-md shadow-md border border-gray-500 p-8 flex flex-col gap-10`}
        >
          <div onClick={handleShowMenu}>How to Request an API Key</div>
          <Link href={`/instructions`}>
            Prompt File Instructions
          </Link>

          <div>
            <div
              onClick={handleDownloadTemplates}
              className=" text-xs w-fit bg-primary-500 flex justify-center items-center px-4 py-2 rounded-md cursor-pointer text-white"
            >
              D/L Sample Prompt File
            </div>
          </div>
          <div className=" text-white text-sm w-fit bg-primary-500 px-6 py-2 cursor-pointer rounded-md">
            {/* <Link href='/login'> */}
            Logout
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutionNav;
