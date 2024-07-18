import { ServiceCard } from '@/components/cards/ServiceCard'
import Motion from '@/components/framer/Motion'
import { servicesList } from '@/constants/services'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-gray-50 py-20 px-8'>
       <Motion initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} viewport={{margin:"-200px", once:true}} transition={{duration:.5}} className='mb-16 text-center'>
       <h3 className='text-gray-900 font-semibold text-xl'>Servicios</h3>
       <p className='font-bold text-5xl text-gray-900 mb-8'>Garantizamos servicios rápidos <br /> para el cuidado dental</p>
       </Motion>

       <Motion initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:.2}} viewport={{margin:"-50px",once:true}} className='grid grid-col grid-cols-3 gap-4 gap-y-8'>
            {servicesList.map(item => (
                <ServiceCard key={item.icon} item={item}     />
            ))}
       </Motion>
    </div>
  )
}

export default Services