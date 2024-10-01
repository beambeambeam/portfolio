import { cn } from '@/libs/utils'
import { ComponentProps, FC } from 'react'

const Picture: FC<ComponentProps<'img'>> = ({ className, ...props }) => {
  return <img {...props} className={`${cn(className, 'aspect-auto')}`} />
}

export default Picture
