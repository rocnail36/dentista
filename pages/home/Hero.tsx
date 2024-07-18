import Motion from '@/components/framer/Motion'
import { PrimaryButton } from '@/components/PrimaryButton'
import React from 'react'

export const Hero = () => {
  return (
    <div className="bg-hero-desktop relative z-[10] bg-center bg-cover h-[80vh] max-h-[700px] flex items-center px-12">
        

        <Motion transition={{delay:0, duration:.8}} initial={{width:0}} animate={{width:"auto"}}>
       <div className='text-white  flex flex-col relative z-[10] top-[-50px] truncate'>
       <p className='mb-2 font-lato text-[16px] font-semibold uppercase'>bienvenido a elene paula odontologia</p>
       <h1 className='font-anton text-7xl mb-12  leading-[80px] tracking-[.2rem]'>Odontología profesional <br/> alta innovación</h1>
       <PrimaryButton className='self-start px-6 ml-4'  text='contactanos'/>
       </div>
       </Motion>

       <div className='absolute left-0 bottom-0 text-center flex'>
     
        <div className='bg-sky-400 h-[150px] flex flex-col justify-center items-center px-12 text-white font-lato '>
         <Motion transition={{delay:.3, duration:.2}} initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}>  
          <p className='font-bold text-[25px]'>Horario de trabajo</p>
          </Motion>
          <Motion initial={{x:"-100%",opacity:0}} animate={{x:"0%",opacity:1}} transition={{delay:.3,duration:.6}}>
          <p className='text-[20px]'>lunes - viernes : 8am - 5pm</p>
          </Motion>
        </div>
 
      
    
        <div className='bg-black/30 h-[150px] relative flex flex-col justify-center items-center px-12 text-white font-lato '>
         <Motion transition={{delay:.3, duration:.2}} initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} >  
          <p className='font-bold text-[25px]'>Telefono</p>
          </Motion>
          <Motion initial={{x:"-100%",opacity:0}} animate={{x:"0%",opacity:1}} transition={{delay:.3,duration:.6}}>
          <p className='text-[20px]'>+58 4165458026</p>
          </Motion>
          <div className='absolute h-[40%] w-[1px] bg-white self-center right-0'></div>
        </div>
     

   
        <div className='bg-black/30 h-[150px] flex flex-col justify-center items-center px-12 text-white font-lato '>
         <Motion transition={{delay:.3, duration:.2}} initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}  > 
          <p className='font-bold text-[25px]'>Correo</p>
          </Motion>
          <Motion initial={{x:"-100%",opacity:0}} animate={{x:"0%",opacity:1}} transition={{delay:.3,duration:.6}}>
          <p className='text-[20px]'>lunes - viernes : 8am - 5pm</p>
          </Motion>
        </div>
    
       </div>
   </div>
  )
}
