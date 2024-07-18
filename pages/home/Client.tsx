"use client"
import Image from 'next/image'
import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import Motion from '@/components/framer/Motion';


const Client = () => {
  return (
    <div className='bg-gray-50 h-[250px] mb-40 justify-center  flex items-center border-solid border-[1px]'>

        <Motion className='w-[30%]  flex gap-8 items-center' initial={{x:-300}} whileInView={{x:0}} transition={{duration:.7}} viewPort={{once:true}}>
          <Image  src={"/message.svg"} alt='message' width={200} height={100} />
          <p className='text-4xl'>Cliente satisfechos</p>
        </Motion>

        <Motion className='w-[60%]' initial={{x:400}} whileInView={{x:0}} viewPort={{once:true}} transition={{duration:.7}}>
        <Swiper
      modules={[Navigation,Autoplay]}
      className='flex justify-center items-center w-full border-solid border-[1px] h-[300px]'
      style={{margin:0}}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay:3000,reverseDirection:false}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     loop={true}
    >
      <SwiperSlide className=''>
      <div className='flex items-center justify-center flex-col h-[100%] bg-white px-16'>
      <p className='mb-12 font-semibold italic text-gray-600'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut sapien justo. Aliquam pretium quis dui et ullamcorper Sed sed .  quis dignissim erat convallis. Quisque commodo ipsum a dictum tincidunt. Morbi ut dictum lorem. Duis cursus"</p>
      <h4 className='font-bold text-xl text-gray-800'>Cristen Lorems</h4>
      <span className='text-sm font-semibold'>costumer</span>
      </div>
      </SwiperSlide>

      <SwiperSlide className=''>
      <div className='flex items-center justify-center flex-col h-[100%] bg-white px-16'>
      <p className='mb-12 font-semibold italic text-gray-600'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut sapien justo. Aliquam pretium quis dui et ullamcorper Sed sed .  quis dignissim erat convallis. Quisque commodo ipsum a dictum tincidunt. Morbi ut dictum lorem. Duis cursus"</p>
      <h4 className='font-bold text-xl text-gray-800'>Cristen Lorems</h4>
      <span className='text-sm font-semibold'>costumer</span>
      </div>
      </SwiperSlide>

      <SwiperSlide className=''>
      <div className='flex items-center justify-center flex-col h-[100%] bg-white px-16'>
      <p className='mb-12 font-semibold italic text-gray-600'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut sapien justo. Aliquam pretium quis dui et ullamcorper Sed sed .  quis dignissim erat convallis. Quisque commodo ipsum a dictum tincidunt. Morbi ut dictum lorem. Duis cursus"</p>
      <h4 className='font-bold text-xl text-gray-800'>Cristen Lorems</h4>
      <span className='text-sm font-semibold'>costumer</span>
      </div>
      </SwiperSlide>

    </Swiper>
    </Motion>
    </div>
  )
}

export default Client