import React from 'react';
import UserMetrics from "@/components/UserMetrics";

const Title = () => {
  return (
    <div className='flex flex-col justify-around items-center h-full gap-[40px] p-12'>
        <UserMetrics />
        
        <h3 className='sm:text-[18px] text-[12px] text-center font-medium leading-[20px] tracking-[-0.18px] opacity-60'>The best detailed dashboard for all communities</h3>

        {/* <div>
          <h2 className='sm:text-[40px] text-[20px] font-semibold sm:leading-[59.5px] leading-[30.5px] tracking-[-0.48px] opacity-85 sm:max-w-[611px] text-center'>
            Increase your revenue,
          </h2>
          <h2 className='sm:text-[55px] text-[30px] font-semibold sm:leading-[59.5px] leading-[30.5px] tracking-[-0.48px] opacity-85 sm:max-w-[611px] text-center'>
            using <span className='cool-bg sm:text-[64px] text-[30px] font-semibold sm:leading-[59.5px] leading-[30.5px] tracking-[-0.48px]'>User Metrics!</span>
          </h2>
        </div> */}

        <div>
          <h2 className='sm:text-[40px] text-[20px] font-semibold sm:leading-[59.5px] leading-[30.5px] tracking-[-0.48px] opacity-85 sm:max-w-[611px] text-center'>
            Measure the metrics you need in your community
          </h2>
        </div>
    </div>
  )
}

export default Title