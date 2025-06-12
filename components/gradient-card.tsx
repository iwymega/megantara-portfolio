"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface GradientCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient: string
  index: number
}

export function GradientCard({ icon, title, description, gradient, index }: GradientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
        />
        <CardHeader className="relative">
          <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
            <div>
              <motion.div
                className="w-6 h-6 rounded-full bg-green-500 mb-2 shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <CardTitle className="text-lg bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {title}
              </CardTitle>
            </div>
          </motion.div>
        </CardHeader>
        <CardContent className="relative">
          <CardDescription className="text-base text-gray-600">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
