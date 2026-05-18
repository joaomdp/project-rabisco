'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children:   ReactNode
  delay?:     number
  className?: string
  y?:         number
}

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function Reveal({ children, delay = 0, className, y = 28 }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay }}
      variants={{ hidden: { opacity: 0, y }, show: baseVariants.show }}
    >
      {children}
    </motion.div>
  )
}
