"use client";

import LoginForm from '@/containers/LoginForm'
import { Head } from 'next/document'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { loadGoogleAnalytic } from '../../utils/GoogleAnalytics'

const Login = () => {

  useEffect(() => {
    const cleanup = loadGoogleAnalytic();
    return cleanup;
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      {/* <Head>
        <script async src={process.env.GOOGLE_TAG_URL}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.GOOGLE_TAG_CONFIG});
            `,
          }}
        />
      </Head> */}
    <div className='flex min-h-screen flex-col items-center w-full bg-primary-100'>
      <LoginForm /> 
      <div className=" absolute min-h-screen top-32 md:-top-72  w-full">
        <img src="wave.svg" alt="" />
      </div>
     </div>
    </>
  )
}

export default Login