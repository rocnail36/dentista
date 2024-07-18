import Image from 'next/image'
import React from 'react'
import { CardButton } from '../CardButton'



type Props = {
    item: DentalService
}

export const ServiceCard = ({item}:Props) => {

    const {description,icon,image,subtitle,title} = item

  return (
    <div className='flex flex-col justify-center m-auto max-w-[350px] px-4 py-8 gap-6 rounded-t-2xl rounded-bl-2xl bg-white border-[1px] border-solid '>

        <div className='flex justify-between items-center'>
            <Image src={icon} width={50} height={50} alt='icon' />
            <p className='border-[1px] border-solid  rounded-t-xl rounded-bl-xl px-4 py-2 text-sm font-medium'>{subtitle}</p>
        </div>

        <h3 className='font-bold text-slate-800 text-xl '>{title}</h3>

        <hr/>

        <p className='text-gray-600 text-lg'>{description}</p>

      <div className='group'>

    <div className="m-auto relative  rounded-t-xl rounded-bl-xl mb-8  after:absolute after:w-[0%] after:h-[100%] h-[225px] after:bg-sky-400/30 after:top-0 after:left-0 group-hover:after:w-[100%] after:transition-all">
    <Image style={{objectFit:"cover"}}  src={image} fill alt='image-dentist' />
    </div>
      

        <CardButton />


      </div>




    </div>
  )
}
