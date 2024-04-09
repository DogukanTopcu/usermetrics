"use client"
import React, { useEffect, useState } from 'react';
import UserMetrics from "@/components/UserMetrics";
import { useRouter } from 'next/navigation';

const AlmostDone = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();
  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem("email")));
  }, []);

  if (email == null) {
    router.push("/");
  }
  return (
    <div className='flex flex-col justify-around items-center h-full p-12'>
      <div className='mb-[80px]'>
        <UserMetrics />
      </div>
        
        <h2 className='mb-[40px] sm:text-[64px] text-[24px] font-semibold sm:leading-[59.5px] leading-[24px] tracking-[-0.48px] opacity-85 sm:max-w-[611px] max-w-[276px] text-center'>
            Almost Done!
        </h2>
        
        <h3 className='sm:text-[18px] text-[10px] text-center font-normal leading-[25px] tracking-[-0.18px] sm:max-w-[480px] max-w-[260px]'>
            Click the verification link sent to <span className='font-bold'>{email?.email}</span> to verify your waitlist spot.
        </h3>

    </div>
  )
}

export default AlmostDone