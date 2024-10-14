import { ComponentProps, FC } from 'react'
import { cn } from '@/libs/utils'

const Beam: FC<ComponentProps<'img'>> = ({ className, ...props }) => {
  return (
    <img
      src="/beam.svg"
      alt="beam logo"
      {...props}
      className={`${cn(className, 'aspect-auto')}`}
    />
  )
}

export default Beam
