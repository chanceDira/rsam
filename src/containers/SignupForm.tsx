"use client"

import Notify from "@/components/Notify";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

interface CustomAxiosError {
  response?: {
    data?: {
      detail?: Array<{ msg: string }> | string;
    };
  };
}

const SignupForm = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('')
  const [shownMessage, setShownMessage] = useState("");
  const [loading, setLoading] = useState(false) 




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log('one')

    const formData = new FormData(e.currentTarget);

    const json = Object.fromEntries(formData.entries());
    json.name = name;
    json.email = email;
    json.password = password;

    try {
      setLoading(true)

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/register/`,
        json,
        {
          headers: {
            "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response) {
        console.log("response:", response);
        setEmail("");
        setName("");
        setPassword("");
      setLoading(false)
        Notify("Please check your email to verify !!", "success");
        setShownMessage("Please check your email to verify !!");
      }
    } catch (error) {
      // console.log(error);
      setLoading(false)
      const customError = error as any;
      // Notify(customError.response?.data?.detail[0]?.msg ?? "This email is already registered, please login instead", "error");
      Notify(customError.response?.data?.detail, "error");
      
      setEmail("");
      setName("");
      setPassword("");
    }
  };

  return (
    <div className="z-20 flex flex-col items-center justify-center   min-h-screen ">
      <div className=" text-primary-500 font-bold text-4xl">
      EnhancifAI
      </div>
      <form
        action=""
        className="flex flex-col mt-10 bg-white p-6 gap-6 shadow-md rounded-md "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="  mx-auto font-bold text-2xl text-primary-500">
          Sign up
        </div>
        <div className="flex flex-col">
          <label className=" text-secondary-500">Name</label>
          <input
            type="text"
            className="  bg-primary-100 border rounded-md py-2 px-4 outline-none border-secondary-200 mt-1"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          {/* <Icon icon="mdi:eye"  style={{color: "gray"}} /> */}
        </div>

        <div>
          <button type="submit" disabled={loading} className={`disabled:cursor-not-allowed text-white w-full text-sm flex justify-center ${loading ? ' cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-primary-500'} px-6 py-2 cursor-pointer rounded-md`}>
          {/* <Link href='/execution'> */}
            Signup
            {/* </Link> */}
          </button>
        </div>

        <div className=" text-green-600 italic font-bold">
          {shownMessage}
        </div>
        <div className="font-light text-secondary-500 ">
          Already have an account?{" "}
          <span className=" text-primary-500 font-bold  cursor-pointer">
            <Link href="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
