import React from 'react';
import Image from 'next/image';

import Google from "../assets/img/googleLogo.svg";

const GmailButton = () => {
  return (
    <div className='px-4 -mt-10'>
        <a href="https://mail.google.com/mail/" target='_blank' rel="noopener noreferrer" className='googleButton flex justify-center items-center gap-3 sm:rounded-[20px] rounded-[12px] sm:px-16 px-8 py-4 sm:text-[16px] text-[14px]'>
            <Image src={Google} alt='Gmail' />
            Open Gmail
        </a>
    </div>
  )
}

export default GmailButton