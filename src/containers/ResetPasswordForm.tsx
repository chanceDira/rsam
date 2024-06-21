"use client"

import Notify from '@/components/Notify';
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'


interface CustomAxiosError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

interface ErrorType {
  response?: {
    data?: {
      detail?: string;
    };
  };
}



const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [shownMessage, setShownMessage] = useState("");
  const [loading, setLoading] = useState(false) 
  const token = searchParams.get('token')


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const json = Object.fromEntries(formData.entries());
 
    if(token) {
      json.token = token;
      json.new_password = password;
    }


    try {
      setLoading(true)
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/password/reset`,
        json,
        {
          headers: {
            "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response) {
        // console.log(response);
        setPassword("");
        Notify(response?.data?.message, "success");
        // setShownMessage('Please check your email to verify !!')

        setTimeout(() => {
          router.push(`/login`);
        }, 2000);
      setLoading(false)
      }
    } catch (error: ErrorType | any) {
      setLoading(false)
      if(error?.response?.data?.detail) {
        Notify(error?.response?.data?.detail, "error");
      } else {
        Notify("Oops! We hit a snag. Our technical team has been notified and is looking into the issue. If you need immediate assistance, please contact us at info@oncoai.io. Thank you for your patience!", "error");
      }
    }

  };
    
  return (
    <div className="z-20 flex flex-col items-center justify-center   min-h-screen">
       <div className=" text-primary-500 font-bold text-4xl">
      EnhancifAI
      </div>
      <form
        action=""
        className="flex flex-col mt-10 bg-white px-6 py-10 gap-6 shadow-md rounded-md "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="  mx-auto font-bold text-2xl text-primary-500">
        Reset Password
        </div>
  


        <div className="flex flex-col">
          <label className=" text-secondary-500">Password</label>
          <input
            type="password"
            className="  bg-primary-100 border rounded-md py-2 px-4 outline-none border-secondary-200 mt-1"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className=" text-secondary-500">Confirm Password</label>
          <input
            type="password"
            className={`${
              confirmPassword == ""
                ? " border-secondary-200"
                : password == confirmPassword
                ? "border border-green-500"
                : "border border-red-500"
            }   bg-primary-100 border rounded-md py-2 px-4 outline-none  mt-1`}
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" disabled={loading} className={` text-white text-sm flex justify-center ${loading ? ' cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-primary-500'} disabled:cursor-not-allowed  px-6 py-2 cursor-pointer w-full rounded-md`}>
          Change Password
          </button>
        </div>

     
      </form>
    </div>
  )
}


export default ResetPasswordForm