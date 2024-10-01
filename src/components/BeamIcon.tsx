import { cn } from '@/libs/utils'
import { ComponentProps, FC } from 'react'

const BeamIcon: FC<ComponentProps<'img'>> = ({ className, ...props }) => {
  return (
    <img
      src="./src/assets/BEAMBEAMBEAM.svg"
      alt="beam logo"
      {...props}
      className={`${cn(className, 'aspect-auto w-42')}`}
    />
  )
}

export default BeamIcon
