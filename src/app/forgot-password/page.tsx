"use client";

import ForgotPasswordForm from '@/containers/ForgotPasswordForm'
import { loadGoogleAnalytic } from '@/utils/GoogleAnalytics';
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const ForgotPassword = () => {

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
    <div className='flex min-h-screen flex-col items-center w-full bg-primary-100'>
      <ForgotPasswordForm /> 
      <div className=" absolute min-h-screen top-32 md:-top-72  w-full">
        <img src="wave.svg" alt="" />
      </div>
     </div>
    </>
  )
}

export default ForgotPassword