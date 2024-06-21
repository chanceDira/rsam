"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import Verify from "@/components/Verify";
import { useRouter } from 'next/navigation'
import axios from "axios";
import Notify from "@/components/Notify";




const VerifyBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [shownMessage, setShownMessage] = useState(
    "Verifying... Please wait !!!"
  );





  const email = searchParams.get('email');
  const token = searchParams.get('token');

  const verifyEmail = async () => {
    if (!email || !token) {
      Notify("Email or token is missing", "error");
      return;
    }
  
    try {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("token", token);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/validate/register`,
        formData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response) {
        window.localStorage.setItem("token", response.data);
        window.localStorage.setItem("email", email);

        Notify("Successful verified", "success");
        setShownMessage("Successful verified");
        setTimeout(() => {
          router.push('/execution')
        }, 2000);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    verifyEmail();
  }, []);



  return (
    <div className=" flex flex-row items-center justify-center   min-h-screen">
      <form
        action=""
        className="flex flex-col mt-10 bg-white p-6 gap-6 shadow-md rounded-md "
      >
        <div className="  mx-auto font-bold text-4xl text-primary-500">
          EnhancifAI
        </div>

        <div className=" italic">{shownMessage}</div>
      </form>
    </div>
  );
};



export default VerifyBox;
