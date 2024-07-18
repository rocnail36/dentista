import { servicesList } from '@/constants/services'
import Image from 'next/image'
import React from 'react'
import { PrimaryButton } from '../PrimaryButton'

const Footer = () => {
  return (
    <div className='bg-slate-900 grid grid-cols-4 px-12 py-16 relative z-[10] justify-items-center'>
        <Image className='self-center' src="/logo.png" width={200} height={100} alt='logo'/>
        <div className='text-white'>
            <h4 className='font-semibold text-2xl mb-6'>Servicios</h4>
            <ul className='flex gap-4 flex-col list-disc '>
            {servicesList.map(item => (
            <li  key={item.icon} className='text-md hover:text-sky-400 transition-all cursor-pointer'> {item.title}</li>
            ))}
            </ul>
        </div>
        <div className='text-white'>
        <h4 className='font-semibold text-2xl mb-6'>links</h4>
         <ul className='flex gap-4 flex-col list-disc '>
            <li className='cursor-pointer hover:text-sky-400'>Inicio</li>
            <li className='cursor-pointer hover:text-sky-400'>Servicios</li>
            <li className='cursor-pointer hover:text-sky-400'>Contacto</li>
         </ul>
        </div>
        <div className='self-center text-white'>
            <p className='text-3xl  mb-8'>¡Agenda una cita hoy!</p>
            <PrimaryButton className='mb-4' text='Agendar cita'/>
            <p className=' text-lg'>09 : 00 AM - 08 : 00 PM</p>
            <p className='text-sm'>Monday - Sunday</p>
        </div>
    </div>
  )
}

export default Footer