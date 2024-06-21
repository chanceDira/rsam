"use client";

import ResetPasswordForm from "@/containers/ResetPasswordForm";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Suspense } from 'react'
import { loadGoogleAnalytic } from "@/utils/GoogleAnalytics";


const ResetPassword = () => {


  return (
    <Suspense>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex min-h-screen flex-col items-center w-full bg-primary-100">
        <ResetPasswordForm />
        <div className=" absolute min-h-screen top-32 md:-top-72  w-full">
          <img src="wave.svg" alt="" />
        </div>
      </div>
    </Suspense>
  );
};

export default ResetPassword;
