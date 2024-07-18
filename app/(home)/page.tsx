import AboutUs from '@/pages/home/AboutUs'
import Client from '@/pages/home/Client'
import { Hero } from '@/pages/home/Hero'
import Image from '@/pages/home/Image'
import Services from '@/pages/home/Services'
import WhyUs from '@/pages/home/WhyUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <WhyUs/>
      <Services/>
      <Image/>
      <Client/>
    </div>
  )
}

export default page