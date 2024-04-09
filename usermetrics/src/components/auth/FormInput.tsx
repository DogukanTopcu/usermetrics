import React from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

const FormInput = (props: any) => {
  return (
    <div className='w-full flex items-center'>
        <div className='absolute ml-3'>
        {
            props.icon == "person" ?
            (
                <PersonOutlineOutlinedIcon />
            )
            :
            props.icon == "flag" ? 
            (
                <TourOutlinedIcon />
            )
            :
            props.icon == "email" ? 
            (
                <EmailOutlinedIcon />
            )
            :
            props.icon == "password" ? 
            (
                <VpnKeyOutlinedIcon />
            )
            :
            null
        }
        </div>
        <input
        className='
        w-full rounded-lg p-3 pl-10 bg-[#002E62] border-2 border-sky-950
        text-slate-400 text-sm font-medium tracking-tight
        '
        placeholder={props.placeholder} name={props.name} type={props.type} required />
    </div>
  )
}

export default FormInput