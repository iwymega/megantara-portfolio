"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Sparkles, Cpu, Database, Globe } from "lucide-react"

export function FloatingElements() {
  const icons = [
    { Icon: Code2, delay: 0 },
    { Icon: Zap, delay: 0.5 },
    { Icon: Sparkles, delay: 1 },
    { Icon: Cpu, delay: 1.5 },
    { Icon: Database, delay: 2 },
    { Icon: Globe, delay: 2.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-200/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  )
}
