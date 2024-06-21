
"use client";

import LoginForm from "@/containers/LoginForm";
import VerifyBox from "@/containers/VerifyBox";
import { loadGoogleAnalytic } from "@/utils/GoogleAnalytics";
import React, { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";

const Auth = () => {



  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex min-h-screen flex-col items-center w-full bg-primary-100">
        <VerifyBox />
      </div>
    </Suspense>
  );
};

export default Auth;
