import Image from 'next/image'
import React from 'react'

import Linkedin from "../assets/img/linkedinLogo.svg";
import Twitter from "../assets/img/xLogo.svg";

const Footer = () => {
  return (
    <div className='flex justify-between items-center w-full py-2'>
      <p className='absolute text-start left-5 bottom-2 opacity-30 sm:text-[13px] text-[8px] font-medium leading-[20px] tracking-[-0.13px]'>User Metrics @ 2024</p>

      <div className='absolute w-full text-center sm:bottom-2 bottom-8 flex justify-center items-center gap-2'>
        <p className='opacity-25 sm:text-[13px] text-[8px] font-medium leading-[20px] tracking-[-0.13px]'>Our social media:</p>
        <a href="https://www.linkedin.com/company/usermetricsco/" target='_blank' rel="noopener noreferrer"><Image className='sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]' src={Linkedin} alt='Linkedin' /></a>
        <a href="https://twitter.com/Usermetricshq" target="_blank" rel="noopener noreferrer"><Image className='sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]' src={Twitter} alt='Twitter' /></a>
      </div>

      <p className='absolute text-end opacity-25 right-5 bottom-2 sm:text-[13px] text-[8px] font-medium leading-[20px] tracking-[-0.13px]'>Building User Community Dashboard</p>
    </div>
  )
}

export default Footer