"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

interface NumberProps {
  number: number
  reverse?:boolean
}

export default function Number({ number,reverse }: NumberProps) {
    const count = useMotionValue(reverse ? number : 0)
    const rounded = useTransform(count, Math.round)

    useEffect(() => {
        const controls = animate(count, reverse ? 0 : number, { duration: 2 })
        return () => controls.stop()
    }, [number, reverse])

    return <motion.span className="text-2xl font-bold">{rounded}</motion.span>
}
