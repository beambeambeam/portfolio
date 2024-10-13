import { motion } from 'framer-motion'
import { ComponentProps, FC, ReactNode } from 'react'
import { MotionProps } from 'framer-motion'

const ViewDiv: FC<
  ComponentProps<'div'> &
    MotionProps & {
      children: ReactNode
    }
> = (props) => {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      {props.children}
    </motion.div>
  )
}

export default ViewDiv
