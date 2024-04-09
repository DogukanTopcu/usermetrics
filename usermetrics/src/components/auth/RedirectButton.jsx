import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const RedirectButton = () => {
  return (
    <a href='https://usermetrics.co' className='flex justify-center items-center p-2 rounded-xl gap-2 absolute top-10 left-10 cursor-pointer '>
        <KeyboardBackspaceIcon />
        <p className="text-[16px] font-semibold tracking-tight">usermetrics.co</p>
    </a>
  )
}

export default RedirectButton