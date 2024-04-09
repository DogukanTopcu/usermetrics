import Image from 'next/image';
import React from 'react';
import GoogleLogo from "@/assets/img/googleLogo.svg";
import getGoogleOAuthURL from '@/util/getGoogleUrl';

const SignUpGoogleBtn = () => {
  return (
    <a href={getGoogleOAuthURL()} className='bg-white rounded-lg flex justify-center items-center gap-2 p-3 w-full'>
        <Image src={GoogleLogo} alt='' />
        <p className='text-gray-900 font-semibold text-sm tracking-tight'>Google</p>
    </a>
  )
}

export default SignUpGoogleBtn