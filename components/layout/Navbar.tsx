import { navbarLinks } from '@/constants/Navbar'
import React from 'react'

const Navbar = () => {
   
  return (
    <div className='relative flex text-white mb-[-72px] justify-between items-center rounded-b-[50px] px-[50px] py-[20px] border-[1px] border-slate-300 z-[1000]'>
     <div className='flex gap-[20px] items-center'>
     {navbarLinks.map(item => (
        <>
        <p className='uppercase font-semibold text-[14px] cursor-pointer hover:text-sky-300 transition-all'>{item.title}</p>
        </>
      ))}
     </div>
     <div className='flex gap-2 items-center group cursor-pointer transition-all'>
     <svg className='transition-all relative top-[5px] group-hover:fill-sky-300 fill-white  feather feather-phone-forwarded' xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" ><polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
     <p className='transition-all text-[20px] group-hover:text-sky-300 '>(+58 4165458026)</p>
     </div>
    </div>
  )
}

export default Navbar