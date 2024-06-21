"use client"

import Notify from '@/components/Notify';
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

interface CustomAxiosError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}



const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('')
  const [shownMessage, setShownMessage] = useState("");
  const [loading, setLoading] = useState(false) 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log('one')

    const formData = new FormData(e.currentTarget);

    const json = Object.fromEntries(formData.entries());
    json.email = email;
    json.password = password;

    try {
      setLoading(true)
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/login/password`,
        json,
        {
          headers: {
            "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response) {
        window.localStorage.setItem("token", response?.data?.token);
        // console.log("response:", response);
        setEmail("");
        setPassword("");
      setLoading(false)
        Notify("Login successful.", "success");
        setShownMessage("Login successful");
        setTimeout(() => {
          router.push('/execution')
        }, 2000);
      }
    } catch (error) {
      setLoading(false)
      const customError = error as CustomAxiosError;
      // console.log(error);

   
        Notify(customError.response?.data?.detail ?? "No detail available", "error");
      
      setEmail("");
      setPassword("");
    }
  };
    
  return (
    <div className="z-20 flex flex-col items-center justify-center   min-h-screen">
       <div className=" text-primary-500 font-bold text-4xl">
      EnhancifAI
      </div>
      <form
        action=""
        className="flex flex-col mt-10 bg-white p-6 gap-6 shadow-md rounded-md "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="  mx-auto font-bold text-2xl text-primary-500">
          Login
        </div>
  

        <div className="flex flex-col">
          <label className=" text-secondary-500">Email</label>
          <input
            type="email"
            className="  bg-primary-100 border rounded-md py-2 px-4 outline-none border-secondary-200 mt-1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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

        <div>
          <button type="submit" disabled={loading} className={` text-white text-sm flex justify-center ${loading ? ' cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-primary-500'} disabled:cursor-not-allowed  px-6 py-2 cursor-pointer w-full rounded-md`}>
             Login
          </button>
        </div>

        <div className=' flex flex-col'>
        <div className="font-light text-secondary-500 mt-4">
        Don’t have an account?{" "}
          <span className=" text-primary-500 font-bold  cursor-pointer">
            <Link href="/signup">Sign up</Link>
          </span>
        </div>
        <div className='text-primary-500 font-bold  cursor-pointer'>
        <Link href="/forgot-password">Forgot Password</Link>
        </div>
        </div>
     
      </form>
    </div>
  )
}


export default LoginForm