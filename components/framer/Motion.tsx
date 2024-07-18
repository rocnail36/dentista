"use client"

import React from 'react'
import {  motion,  MotionConfigProps,LayoutProps,AnimationProps, TargetAndTransition, VariantLabels,ViewportOptions} from "framer-motion"

interface Props extends  MotionConfigProps, LayoutProps,AnimationProps{
 whileInView?: VariantLabels | TargetAndTransition | undefined
 className?: string  | undefined,
 viewPort?: ViewportOptions | undefined
}




const Motion = ({children,transition,initial,animate,className,whileInView,viewPort}:Props) => {
  return (
    <motion.div
    initial={initial}
    animate={animate}
    transition={transition}
    className={className}
    whileInView={whileInView}
    viewport={viewPort}
  > 
  {children}
  </motion.div>
  )
}

export default Motion