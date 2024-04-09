"use client"
import React, { useEffect, useState } from 'react';

import UserMetrics from '@/components/UserMetrics';
import Footer from '@/components/Footer';
import WaitlistStats from '@/components/WaitlistStats';
import Share from '@/components/Share';
import Loading from "@/app/congratulations/loading";

import { useSearchParams } from 'next/navigation';
import { verifyEmail } from '@/api';

import Typeform from "@/components/Typeform";


const Congrats = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(undefined);
  const [number, setNumber] = useState(0);
  const [place, setPlace] = useState(0);
  const params = useSearchParams();

  // useEffect(() => {
  //   const getData = () => {
  //     verifyEmail(params.get("email"))
  //     .then(({ data }) => {
  //       setEmail(data.email);
  //       setIsLoading(false);
  //       setNumber(data.number);
  //       setPlace(data.place);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       alert("Your email cannot verified. Please try again.");
  //     });
  //   }
  //   return () => getData();
  // }, []);

  useEffect(() => {
    verifyEmail(params.get("email"))
    .then(({ data }) => {
      setEmail(data.email);
      setIsLoading(false);
      setNumber(data.number);
      setPlace(data.place);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <div>
      {
        isLoading ? 
          <Loading /> : 
          email != undefined ? (
            <main className="flex flex-col min-h-screen w-full items-center justify-between">
                <div />
  
              <div className='flex flex-col items-center justify-around h-full container mx-auto max-w-3xl'>
                <div className='mb-[5vh]'>
                    <UserMetrics  />
                </div>
                <WaitlistStats numbers={number} place={place} />
              </div>
  
              <div className='container mx-auto max-w-lg sm:px-0 px-5'>
                <Share email={email} />
              </div>

              <Typeform />
  
              <Footer />
            </main>
          ) : (
            <div className='h-[100vh] text-center flex flex-col items-center justify-center'>
              <div className="inline-block m-[0px 20px 0px 0px] p-[0px 23px 0px 0px] text-[24px] font-medium leading-[49px]">
                <h1>404</h1>
                <div>
                  <h2>This page could not be found.</h2>
                </div>
              </div>
            </div>
        )
      }
    </div>
  )
}

export default Congrats