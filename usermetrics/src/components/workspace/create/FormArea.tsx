import React from 'react'
import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'
import FormStep3 from './FormStep3'

const FormArea = (props : any) => {
    const POST = () => {}
  return (
    <form onSubmit={POST} className='container max-w-md mx-auto border border-black row-span-5'>
        {
            props.step == 1 ? 
            (
                <FormStep1 setStep={props.setStep} step={props.step} />
            )
            : props.step == 2 ?
            (
                <FormStep2 setStep={props.setStep} step={props.step} />
            )
            : props.step == 3 ?
            (
                <FormStep3 />
            )
            : null
        }
    </form>
  )
}

export default FormArea