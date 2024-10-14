import ViewDiv from '@/components/ViewDiv'
import { ReactNode } from 'react'
import { cn } from '@/libs/utils'

const Exp = () => {
  const Section = ({
    align,
    children,
    className,
  }: {
    className?: string
    align: 'start' | 'end' | 'between'
    children: ReactNode
  }) => {
    const alignmentClasses = {
      start: 'self-start',
      end: 'self-end',
      between: 'flex justify-between',
    }
    return (
      <div className={`${cn(alignmentClasses[align], className)}`}>
        {children}
      </div>
    )
  }

  return (
    <div className="py-[18rem]">
      <ViewDiv className="w-full h-screen flex justify-center items-center flex-col">
        <div className="w-[60%] flex flex-col gap-[4.6rem]">
          <Section align="start" className="text-2xl font-light">
            ~/workspace/experience
          </Section>
          <div className="w-full flex-col flex gap-[0.75rem]">
            <Section align="between">
              <p className="text-2xl font-light">~ -{'>'} JULY 2024 - TODAYS</p>
              <p className="text-2xl font-light">3 MONTH</p>
            </Section>
            <Section align="end" className="text-2xl font-bold">
              FRONTEND DEVELOPER @WIRABYTE
            </Section>
          </div>
          <div className="w-full flex flex-col gap-[0.75rem]">
            <Section align="between" className="text-2xl font-light">
              <p>~ -{'>'} 2020 - TODAYS</p>
              <p>4 YEARS</p>
            </Section>
            <Section align="end" className="font-bold text-2xl">
              SELF-TAUGHT GRAPHIC DESIGS, WEB DEV & DS
            </Section>
            <Section align="end" className="font-light text-2xl">
              INTEREST IN MY DESIGN? CONTACT ME NOW!
            </Section>
          </div>
        </div>
      </ViewDiv>
    </div>
  )
}

export default Exp
