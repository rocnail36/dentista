import AnimatedCounter from '@/components/animate-counter'
import Motion from '@/components/framer/Motion'
import React from 'react'

const Image = () => {
  return (
    <div className='bg-gray-50 pt-20 pb-32 relative overflow-hidden'>
        <div className='flex overflow-hidden items-end bg-fixed bg-image-section  bg-[length:80%_1000px] bg-top bg-no-repeat w-[80%] h-[600px] m-auto rounded-t-3xl rounded-bl-3xl'>
        <div className='h-[100%] w-[50%] bg-sky-950/60 flex px-4'>
         <p className='italic text-[60px] font-semibold text-white flex items-center justify-center'>
         &quot;La mejor manera de mantener una sonrisa saludable&quot;
         </p>
        </div>
        </div>
        <Motion viewPort={{once:true}}  initial={{x:100}} whileInView={{x:0}} transition={{duration:.5}} className='bg-sky-400  text-white absolute py-4 px-16 text-center top-4 right-16  rounded-t-3xl rounded-bl-3xl'>
             <div className='text-6xl font-bold'>
              + <AnimatedCounter from={0} to={96}/>
             </div>
             <p className='text-xl font-semibold'>clientes atendidos</p>
        </Motion >
    </div>
  )
}

export default Image