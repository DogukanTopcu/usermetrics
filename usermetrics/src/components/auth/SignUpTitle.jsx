"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const SignUpTitle = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center gap-4'>
        <p className='text-3xl font-semibold tracking-tight'>Sign up for User Metrics</p>
        <p className='opacity-60 text-slate-400 text-[15px] font-semibold leading-normal tracking-tight'>
            Already have an account? 
            <span onClick={() => router.push("/auth/login")} className="text-blue-600 ml-2 cursor-pointer">Log in</span> 
        </p>
    </div>
  )
}

export default SignUpTitle