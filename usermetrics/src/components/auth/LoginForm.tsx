"use client"
import React, { FormEvent } from 'react';
import { login } from "@/api";

import SignUpGoogleBtn from './SignUpGoogleBtn';
import FormInput from './FormInput';
import { useUserContext } from '@/context/user';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const { loginUser } = useUserContext();
  const router = useRouter();
  
  const POST = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    console.log("Yükleniyor...");
    const loginResponse = await loginUser(formData.get("email"), formData.get("password"));

    if (loginResponse) {
      console.log("Başarılı");
      router.push("/");
    }
    else {
      console.log("Başarısız");
    }
    
  }

  return (
    <div className='w-full rounded-2xl border border-[#172133] p-10'>
        <form onSubmit={POST} className='flex flex-col gap-2.5'>
            <FormInput placeholder="Your E-mail" name="email" type="email" icon="email" />
            <FormInput placeholder="Password" name="password" type="password" icon="password" />

            <button type="submit" className='rounded-lg bg-[#52525B] p-3 text-[15px] font-semibold tracking-tight'>
                Login
            </button>
        </form>

        <div className='w-full flex justify-between items-center gap-5 my-5'>
            <div className='w-full border border-gray-400' />
            <p className='text-slate-400 text-sm font-medium tracking-tight'>or</p>
            <div className='w-full border border-gray-400' />
        </div>

        <SignUpGoogleBtn />
    </div>
  )
}

export default LoginForm