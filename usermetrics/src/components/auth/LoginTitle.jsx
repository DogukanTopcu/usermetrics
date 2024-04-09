"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginTitle = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center gap-4'>
        <p className='text-3xl font-semibold tracking-tight'>Log into User Metrics</p>
        <p className='opacity-60 text-white text-[15px] font-semibold leading-normal tracking-tight'>
            <span className="text-[#969AB8] ml-2 cursor-pointer">Or </span> 
            <span className='cursor-pointer' onClick={() => router.push("/auth/signup")}>create your account</span>
        </p>
    </div>
  )
}

export default LoginTitle