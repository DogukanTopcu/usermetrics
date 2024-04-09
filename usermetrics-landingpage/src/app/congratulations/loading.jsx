"use client"
import React from 'react';

import {NextUIProvider} from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";


const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <NextUIProvider>
        <Spinner size="lg" color="primary" />
      </NextUIProvider>
    </div>
  )
}

export default Loading