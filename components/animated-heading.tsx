'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const phrases = [
  "Convert More Leads",
  "Increase Revenue",
  "Invest Mindfully"
]

export default function AnimatedHeading() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className="text-3xl md:text-7xl font-black text-foreground mb-4 leading-tight">
      Fix Your GoHighLevel Automation &{" "}
      <span className="inline-block perspective-[1000px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={phrases[index]}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-primary inline-block"
          >
            {phrases[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  )
}
