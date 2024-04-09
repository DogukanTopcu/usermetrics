import React from 'react';
import RedirectButton from "@/components/auth/RedirectButton";
import UserMetrics from "@/components/auth/UserMetrics";
import SignUpTitle from "@/components/auth/SignUpTitle";
import Footer from "@/components/auth/Footer";
import SignUpForm from '@/components/auth/SignUpForm';

const SignUp = () => {
  return (
    <div className='bg-[#0F172A]'>
        <RedirectButton />
        <div className='h-screen container max-w-md mx-auto flex flex-col justify-between items-center py-2'>
            <div />
            <UserMetrics />
            <SignUpTitle />
            <SignUpForm />
            <Footer />
        </div>
    </div>
  )
}

export default SignUp