import React from 'react';
import { ContinueButton } from "@/components/workspace/create/Button";

const FormStep2 = (props: any) => {
  return (
    <div className='flex flex-col items-center'>
        
        <ContinueButton name="Continue" setStep={props.setStep} step={props.step} />
    </div>
  )
}

export default FormStep2