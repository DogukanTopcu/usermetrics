import Image from 'next/image';
import React, { useState } from 'react';

import Clipboard from "../assets/img/clipboard.svg";
import Clipped from "../assets/img/clipped.svg";

import Linkedin from "../assets/img/linkedin.svg";
import Twitter from "../assets/img/twitter.svg";
import Whatsapp from "../assets/img/whatsapp.svg";
import Telegram from "../assets/img/telegram.svg";
import { updateShare } from '@/api';

import { TwitterShareButton, LinkedinShareButton, WhatsappShareButton, TelegramShareButton } from 'next-share';



const Share = (props : any) => {
    const [isCoppied, setIsCoppied] = useState(false);
    
    const handleCopy = () => {
        setIsCoppied(true);
        setTimeout(() => {
            setIsCoppied(false);
        }, 1000);
        
        updateShare(props.email).then(({ data }) => console.log(data));
    }
    const handleWhatsapp = () => {
        updateShare(props.email).then(({ data }) => console.log(data));
    }
    const handleTelegram = () => {
        updateShare(props.email).then(({ data }) => console.log(data));
    }
    const handleTwitter = () => {
        updateShare(props.email).then(({ data }) => console.log(data));
    }
    const handleLinkedin = () => {
        updateShare(props.email).then(({ data }) => console.log(data));
    }
  return (
    <div className='share rounded-[20px] flex flex-col items-center justify-center gap-5 w-full p-6'>
        <p className='sm:text-[16px] text-[10px] font-semibold leading-[20px] tracking-[-0.16px] mb-3'>
            Invite your friends to move up in line.
        </p>

        <div className='relative w-full flex items-center mb-2'>
            <input 
                disabled 
                type="text" 
                name="link" 
                value={`https://usermetrics.co/?invite`}
                className="shareInput sm:rounded-[20px] rounded-[10px] p-4 w-full sm:text-[14px] text-[8px] border-2 border-white/80" 
            />
            <a type="button" onClick={handleCopy} className='cool-bg absolute right-4 cursor-pointer sm:text-[16px] text-[10px] font-bold leading-[20px] tracking-[-0.16px]'>
                {isCoppied ? "Copied" : "Copy"}
            </a>
        </div>

        {/* <a type="button" onClick={handleCopy} className={`copyButton ${isCoppied ? "bg-[#17C964]" : "bg-[#d9d9d94d]"} sm:py-3.5 py-1.5 flex items-center justify-center w-full text-center mb-7 sm:rounded-[20px] rounded-[10px] sm:text-[14px] text-[8px]`}>
            {
                isCoppied ? "Coppied" : "Copy Link"
            }
            {
                isCoppied ? <Image src={Clipped} alt='copy to clipboard' className='sm:ml-2 ml-0.5 sm:h-auto h-5' /> : <Image src={Clipboard} alt='copy to clipboard' className='sm:ml-2 ml-0.5 sm:h-auto h-5' />
            }
        </a> */}

        <p>Share</p>

        <div className='flex justify-center items-center gap-4 w-full'>
            <a className='cursor-pointer' type="button" onClick={handleLinkedin}>
                <LinkedinShareButton url={'http://usermetrics.co'}>
                    <Image className='sm:h-auto h-8' src={Linkedin} alt='Linkedin' />
                </LinkedinShareButton>
            </a>
            <a className='cursor-pointer' type="button" onClick={handleTwitter}>
                <TwitterShareButton title={`Sign up to get Early access to User Metrics 🤩\n\nUser Metrics is a platform used by companies to measure, analyze, and understand user behaviors and interactions on their community platforms.\n\n`} url={'http://usermetrics.co'}>
                    <Image className='sm:h-auto h-8' src={Twitter} alt='Twitter' />
                </TwitterShareButton>
            </a>
            <a className='cursor-pointer' type="button" onClick={handleWhatsapp}>
                <WhatsappShareButton title={`Sign up to get Early access to User Metrics 🤩\n\nUser Metrics is a platform used by companies to measure, analyze, and understand user behaviors and interactions on their community platforms.\n\n`} url={'http://usermetrics.co'}>
                    <Image className='sm:h-auto h-8' src={Whatsapp} alt='Whatsapp' />
                </WhatsappShareButton>
            </a>
            <a className='cursor-pointer' type="button" onClick={handleTelegram}>
                <TelegramShareButton title={`Sign up to get Early access to User Metrics 🤩\n\nUser Metrics is a platform used by companies to measure, analyze, and understand user behaviors and interactions on their community platforms.\n\n`} url={'http://usermetrics.co'}>
                    <Image className='sm:h-auto h-8' src={Telegram} alt='Telegram' />
                </TelegramShareButton>
            </a>
        </div>
    </div>
  )
}

export default Share