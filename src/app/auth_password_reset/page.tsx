"use client"

import Notify from '@/components/Notify';
import ForgotPasswordForm from '@/containers/ForgotPasswordForm'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { loadGoogleAnalytic } from '@/utils/GoogleAnalytics';

const AuthPasswordReset = () => {



  return (
    <Suspense>
      <Toaster position="top-right" reverseOrder={true} />
      <ResetComponent />
    </Suspense>
  )
}

const ResetComponent = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [shownMessage, setShownMessage] = useState("Verifying reset... Please wait !!!");
  const email = searchParams.get('email')
  const token = searchParams.get('token')
  
  const verifyReset = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/validate/password_reset?email=${email}&token=${token}`
      );
      if (response) {
        Notify("Successful verified", "success");
        setShownMessage("Successful verified");
        setTimeout(() => {
          router.push(`/reset-password?token=${token}`);
        }, 2000);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    verifyReset();
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center w-full bg-primary-100'>
      <div className="flex text-primary-500 bg-white p-6 shadow-md z-50 rounded-md text-2xl font-bold flex-col justify-center items-center w-[80%] md:w-[50%]">
        {shownMessage}
      </div>
      <div className="absolute min-h-screen top-32 md:-top-72 w-full">
        <img src="wave.svg" alt="" />
      </div>
    </div>
  )
}

export default AuthPasswordReset
