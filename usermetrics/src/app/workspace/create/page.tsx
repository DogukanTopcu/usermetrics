"use client"
import React, { useState } from 'react';
import UserMetrics from '@/components/workspace/create/UserMetrics';
import CreateWorkspaceTitle from "@/components/workspace/create/CreateWorkspaceTitle";
import FormArea from '@/components/workspace/create/FormArea';

const CreateWorkspace = () => {
  const [step, setStep] = useState(1);

  return (
    <div className='w-screen h-screen bg-gradient-to-bl from-[#465FF1]/70 to-[#465FF15E]/70 p-7'>
      <div className='h-full w-full relative rounded-[20px] bg-white p-5'>
        <div className='container max-w-2xl mx-auto grid grid-rows-8 max-h-full items-center'>
          <UserMetrics />
          <p className='border border-black text-center text-zinc-400 text-lg font-normal'>{step} / 3</p>
          <CreateWorkspaceTitle />
          <FormArea step={step} setStep={setStep} />
        </div>
      </div>
    </div>
  )
}

export default CreateWorkspace