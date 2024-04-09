import React from 'react';

const WaitlistStats = (props : any) => {
  return (
    <div className='sm:text-[52px] text-[24px]'>
        <p className='text-center pb-3 font-semibold'>
            Awesome!
        </p>
        <p className='font-semibold sm:leading-[58px] leading-[32px] text-center'>
        You are <span className='cool-bg'>#{props.place}</span> on 
        </p>
        <p className='font-semibold sm:leading-[58px] leading-[32px] text-center'>
        the User Metrics Waitlist!
        </p>
    </div>
  )
}

export default WaitlistStats