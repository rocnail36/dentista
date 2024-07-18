"use client"

import React from 'react'
import {  motion,  VariantLabels,MakeCustomValueType,TargetProperties, Transition$1,TargetAndTransition, ViewportOptions} from "framer-motion"

type Props = {
    children: React.ReactNode,
    transition: Transition$1 | undefined
    initial: boolean | MakeCustomValueType<TargetProperties> | VariantLabels | undefined
    animate?: boolean | MakeCustomValueType<TargetProperties> | VariantLabels | undefined
    className?: string
    whileInView?: VariantLabels | TargetAndTransition,
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