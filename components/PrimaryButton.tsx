import React from 'react'


type Props = {
    text:string,
    children?: React.ReactNode,
    className?: string
}

export const PrimaryButton = ({children,text,className}:Props) => {
  return (   
    <button className={`text-sky-400 group uppercase bg-white flex items-center gap-2 p-2 rounded-lg  border-sky-400 border-[3px] relative after:w-full after:absolute after:h-full after:bg-sky-400 after:rounded-lg after:z-[-1] after:left-[-8px] after:top-[-8px] hover:text-white hover:bg-sky-400 hover:after:top-0 hover:after:left-0 transition-all  after:transition-all duration-200 ${className && className}`}>
                <p className='font-semibold text-lg'>{text}</p>
                {children ?? children}
    </button>
  )
}
