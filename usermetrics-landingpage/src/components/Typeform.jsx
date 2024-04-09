import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Typeform = () => {
    const router = useRouter();
    const [isMouseHover, setIsMouseHover] = useState(false);
  return (
    <div onMouseLeave={() => setIsMouseHover(false)} onMouseEnter={() => setIsMouseHover(true)} onClick={() => router.push("/form")} className='cool-border rounded-md min-w-[207px] p-3 text-center cursor-pointer text-[10px]'>
        {
            isMouseHover ? "Go to our feedback survey ✨" : "Support us develop our product"
        }
    </div>
  )
}

export default Typeform