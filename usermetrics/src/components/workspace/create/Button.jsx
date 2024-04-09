import React from 'react'

const ContinueButton = (props) => {
  return (
    <button onClick={() => props.setStep(props.step + 1)} type='button' className='max-w-xs w-full p-3 bg-indigo-600 rounded-lg text-white'>
        {props.name}
    </button>
  )
}

const SubmitButton = (props) => {
    return (
        <button type='submit' className='max-w-sm w-full p-3 bg-indigo-600 rounded-lg text-white'>
            {props.name}
        </button>
    )
}

export { ContinueButton, SubmitButton }