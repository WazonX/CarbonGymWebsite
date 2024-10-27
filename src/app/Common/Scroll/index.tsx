'use client'
import { motion, useScroll, useSpring } from "framer-motion"
import '../../globals.css'

function Component() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
    className="progress-bar"
    style={{ scaleX: useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
      }) }}
  />  )
}
export default Component;