import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AnimatedSkillBar({ skill }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${skill.level}%`,
        transition: {
          duration: 1.2,
          ease: [0.6, 0.05, 0.01, 0.9],
          delay: 0.2
        }
      })
    }
  }, [controls, inView, skill.level])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg"
      >
        {skill.icon}
      </motion.div>
      <p className="mt-2 text-sm text-white font-medium text-center">{skill.name}</p>
      <div className="w-full bg-gray-700 rounded h-2 mt-1 relative">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={controls}
          className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded absolute top-0 left-0"
        />
        <div className="text-xs text-gray-400 text-right mt-1">
        </div>
      </div>
    </motion.div>
  )
}