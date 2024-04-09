import React from 'react';
import Logo from "@/assets/img/logo.svg";
import Image from 'next/image';

const UserMetrics = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
        <Image className='pointer-events-none sm:w-[50px] w-[30px]' src={Logo} alt="Logo" srcSet="" />
        <h1 className='sm:text-[32px] text-2xl font-semibold leading-[59px] tracking-[-0.32px]'>User Metrics</h1>
    </div>
  )
}

export default UserMetrics