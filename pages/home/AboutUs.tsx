import Motion from '@/components/framer/Motion'
import { PrimaryButton } from '@/components/PrimaryButton'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='h-[80vh] flex justify-between pt-24 px-14 bg-gray-50 relative z-[1]'>

            <div className='grid grid-rows-3 grid-cols-2 max-w-[550px] w-[50%] justify-items-start relative rounded-t-xl'>

                <Motion className='mt-[150px]' transition={{duration:.3}} initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}}   viewport={{once:true}}>
               <img className='rounded-t-xl rounded-bl-xl' src="/about-1.jpg" alt="foto de dentista" width={240} height={420} /> 
               </Motion>
               <Motion transition={{duration:.3}} initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}}  viewport={{ once: true }}>
               <img className=' rounded-t-xl rounded-bl-xl ' src="/about-2.jpg" alt="foto de dentista" width={240} height={420} />
               </Motion>
              <Motion transition={{duration:2,repeat:Infinity,ease:'linear',repeatType:'mirror'}} className='absolute right-[-50px] bottom-[40%]'  initial={{y:0}} animate={{y:-30}}>
               <div className='bg-sky-400 font-lato text-center px-4 py-12 rounded-t-xl rounded-bl-xl'>
                    <p className='font-extrabold text-white text-[40px]'>+1000</p>
                    <p className='text-[18px] text-white'>Sonrisas complacidas</p>
               </div>
               </Motion>
            </div>



            <Motion className='w-[45%]' transition={{duration:.5}} initial={{x:200}} whileInView={{x:0}} viewport={{once:true}}>
            
                <h2 className='text-gray-900 font-semibold text-xl'>¿Quienes somos?</h2>
                <p className='font-bold text-6xl text-gray-900 mb-8'>Impulsando sonrisas saludables y confianza</p>
                <p className=' text-gray-600 mb-6'>¡Bienvenido a nuestra oficina! Nuestros dentistas y nuestro equipo esperan cuidar de usted y de su sonrisa. Entendemos cuán estrechamente relacionada está la salud bucal con su salud, confianza y apariencia en general, y nos enorgullecemos de cultivar una amistad.</p>
                <div className='flex gap-6'>
                <PrimaryButton text='acerca de nosotros'/>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <Image src={"/check.svg"} alt='check-icon' width={15} height={15} />
                        <p className='text-lg text-gray-600'>Tratamiento sin dolor</p>
                    </div>
                    <div className='flex'>
                        <Image src={"/check.svg"} alt='check-icon' width={15} height={15} />
                        <p className='text-lg text-gray-600'>personal altamente calificado</p>
                    </div>
                </div>
                </div>
          
            </Motion>
    </div>
  )
}

export default AboutUs