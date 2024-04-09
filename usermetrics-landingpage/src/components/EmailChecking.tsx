"use client"
import { useRouter } from 'next/navigation';
import React from 'react';


const EmailChecking = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center sm:gap-6 gap-2'>
        <p className='sm:text-[16px] text-[10px] text-center font-normal leading-[20px] tracking-[-0.16px]'>
            Didn’t get an email? <span className='font-bold'>Check your spam folder!</span>
        </p>

        <a type='button' onClick={() => router.push("/")} className='cursor-pointer sm:text-[16px] text-[10px] text-center font-semibold leading-[20px] tracking-[-0.16] text-[#F2BBBB] hover:text-[#924949] transition-all duration-100'>
            Re-enter your email and try again
        </a>
    </div>
  )
}

export default EmailChecking