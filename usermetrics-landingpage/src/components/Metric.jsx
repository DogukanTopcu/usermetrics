"use client"
import { getPeopleNumber } from '@/api';
import React, { useEffect, useState } from 'react'

const Metric = () => {
  const [count, setCount] = useState(-1);

  // useEffect(() => {
  //   const getData = () => {
  //     getPeopleNumber()
  //     .then(({ data }) => {
  //       console.log(data);
  //       setCount(data.number);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       setCount(-1);
  //     });
  //   }
  //   return () => getData();
  // }, []);

  useEffect(() => {
    getPeopleNumber()
      .then(({ data }) => {
        console.log(data);
        setCount(data.number);
      })
      .catch((err) => {
        console.log(err.message);
        setCount(-1);
      });
  }, []);
  
  return (
    <div>
      {
        count == -1 ? <></> : <p className='sm:text-[13px] text-[8px] font-normal leading-[20px] tracking-[-0.13px] opacity-75'><span className='font-black'>{count}</span> people jumped our waitlist</p>
      }
        
    </div>
  )
}

export default Metric