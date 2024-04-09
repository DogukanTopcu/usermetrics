import Form from '@/components/Form';
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Metric from "@/components/Metric";
import { useEffect } from 'react';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-between">
      <div />
      <div className='flex flex-col items-center justify-around h-full container mx-auto max-w-3xl'>
        <Title />
      </div>

      <div className='container mx-auto max-w-3xl sm:px-0 px-5'>
        <Form />
      </div>

      <Metric />


      <Footer />
    </main>
  )
}
