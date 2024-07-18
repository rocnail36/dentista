import Motion from '@/components/framer/Motion'
import { PrimaryButton } from '@/components/PrimaryButton'
import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='bg-gray-100 justify-between py-24 px-14 relative z-[1]'>
        <Motion className='flex items-center' initial={{y:200}} whileInView={{y:0}} transition={{duration:.5}} viewPort={{margin:"100px"}}>
        <div className='w-[25%]'>
            <h2 className='text-gray-900 font-semibold text-xl'>¿Porque elegirnos?</h2>
            <p className='font-bold text-6xl text-gray-900 mb-8'>Odontología de última generación</p>
            <p className='text-gray-600 mb-10'>Estamos orgullosos de servir a nuestra comunidad y estamos comprometidos a sonreír generando un impacto positivo en la salud mundial de nuestros pacientes.</p>
            <PrimaryButton text='mas detalles'/>
        </div>

        <div className='w-[50%] flex justify-center'>
            <Motion initial={{y:-40}} animate={{y:0}} transition={{repeat:Infinity, ease:"linear",duration:2,repeatType:"mirror"}} >
            <Image src={"/big-tooth.png"} width={360} height={400} alt='tooth' /> 
            </Motion>
        </div>

        <div className='w-[25%] flex flex-col gap-8'>

            <div>
            <h3 className='text-4xl font-semibold mb-4 text-gray-900'>Chequeo dental</h3>
            <p className='text-gray-600 mb-6'>El cuidado dental es fundamental para mantener una buena salud bucal, previniendo problemas dentales.</p>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'> <Image src={"/arrow-up.svg"} width={-2} height={18} alt='arrow-up' />  <p className='text-gray-900'>Extracción de muelas del juicio</p></div>
                <div className='flex gap-2'> <Image src={"/arrow-up.svg"} width={-2} height={18} alt='arrow-up' />  <p className='text-gray-900'>Tratamiento de conducto</p></div>
                <div className='flex gap-2'> <Image src={"/arrow-up.svg"} width={-2} height={18} alt='arrow-up' />  <p className='text-gray-900'>Invisalign & ClearCorrect</p></div>
            </div>
            </div>
            <div>
            <h3 className='text-4xl font-semibold mb-4 text-gray-900'>Chequeo dental</h3>
            <p className='text-gray-600 mb-6'>El cuidado dental es fundamental para mantener una buena salud bucal, previniendo problemas dentales.</p>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'> <Image src={"/arrow-up.svg"} width={-2} height={18} alt='arrow-up' />  <p className='text-gray-900'>Extracción de muelas del juicio</p></div>
                <div className='flex gap-2'> <Image src={"/arrow-up.svg"} width={-2} height={18} alt='arrow-up' />  <p className='text-gray-900'>Tratamiento de conducto</p></div>
                <div className='flex gap-2'> <Image src={"/arrow-up.svg"} width={-2} height={18} alt='arrow-up' />  <p className='text-gray-900'>Invisalign & ClearCorrect</p></div>
            </div>
            </div>
          

        </div>
        </Motion>
    </div>
  )
}

export default WhyUs