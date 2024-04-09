import React from 'react';

const InputField = (props) => {
  return (
    <div className='w-full my-2 border'>
        <label className='text-slate-800 text-base font-normal'>{props.label}</label>
        <input 
            onChange={
                props.setText ? (e) => {
                    setText(e.target.value);
                } : null
            }   
            type={props.type}
            name={props.name} 
            placeholder={props.placeholder}
            className='w-full px-4 py-2 rounded-lg border border-indigo-600 border-opacity-40 text-black' 
        />
    </div>
  )
}

export default InputField