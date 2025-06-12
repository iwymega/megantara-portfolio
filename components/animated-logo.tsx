"use client"

import { motion } from "framer-motion"

export function AnimatedLogo() {
  return (
    <motion.div
      className="relative w-10 h-10"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-lg"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          M
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
