import React from 'react';

import RedirectButton from "@/components/auth/RedirectButton";
import UserMetrics from "@/components/auth/UserMetrics";
import LoginTitle from "@/components/auth/LoginTitle";
import Footer from "@/components/auth/Footer";
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {

  return (
    <div className='bg-[#0F172A]'>
        <RedirectButton />
        <div className='h-screen container max-w-md mx-auto flex flex-col justify-between items-center py-2'>
            <div />
            <UserMetrics />
            <LoginTitle />
            <LoginForm />
            <Footer />
        </div>
    </div>
  )
}

export default Login