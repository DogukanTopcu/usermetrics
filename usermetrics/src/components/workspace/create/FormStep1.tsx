import React from 'react'
import { ContinueButton } from '@/components/workspace/create/Button';
import InputField from "@/components/workspace/create/InputField";

const FormStep1 = (props : any) => {
  return (
    <div className='flex flex-col items-center w-full'>
        
        <InputField label="Workspace Name" type="text" name="workspace_name" placeholder="My Workspace" />
        <InputField label="Workspace Name" type="text" name="workspace_name" placeholder="My Workspace" />
        <InputField label="Workspace Name" type="text" name="workspace_name" placeholder="My Workspace" />
        <ContinueButton name="Continue" setStep={props.setStep} step={props.step} />
    </div>
  )
}

export default FormStep1