import Navbar from "@/containers/Navbar";
import SignupForm from "@/containers/SignupForm";
import React from "react";
import { Toaster } from "react-hot-toast";

const Signup = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <div className=" relative flex min-h-screen flex-col items-center w-full bg-primary-100">
        <SignupForm />
        <div className=" absolute min-h-screen top-32 md:-top-72  w-full">
        <img src="wave.svg" alt="" />
      </div>
      </div>
    </>
  );
};

export default Signup;
