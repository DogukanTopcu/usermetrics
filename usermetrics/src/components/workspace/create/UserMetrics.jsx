import React from 'react';
import Logo from "@/assets/img/logo.svg";
import Image from 'next/image';

const UserMetrics = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
        <Image className='pointer-events-none w-[50px]' src={Logo} alt="Logo" srcSet="" />
        <h1 className="text-slate-800 text-2xl font-semibold leading-[59px]">User Metrics</h1>
    </div>
  )
}

export default UserMetrics