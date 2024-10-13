import { cn } from '@/libs/utils'
import { ComponentProps, FC } from 'react'

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
