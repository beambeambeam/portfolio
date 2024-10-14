import { ComponentProps, FC } from 'react'
import { cn } from '@/libs/utils'

const Picture: FC<ComponentProps<'img'>> = ({ className, ...props }) => {
  return <img {...props} className={`${cn(className, 'aspect-auto')}`} />
}

export default Picture
