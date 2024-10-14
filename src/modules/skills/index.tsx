import { useState } from 'react'
import { colorMapSkill, Skill } from '@/modules/skills/schema'
import { motion } from 'framer-motion'
import ViewDiv from '@/components/ViewDiv'
import Picture from '@/components/Picture'

type SkillIconProps = {
  icons: string[]
}

const Skills = () => {
  const [hoverOn, setHoverOn] = useState<Skill>('none')
  const [prevHover, setPrevHover] = useState<Skill>('none')

  if (prevHover === hoverOn) {
    setPrevHover('none')
  }

  const SkillIcons = ({ icons }: SkillIconProps) => {
    return (
      <div className="flex flex-row gap-3 p-4 items-center">
        {icons.map((icon, index) => (
          <div
            className="w-fit h-fit"
            onMouseEnter={() => {
              setHoverOn(icon as Skill)
            }}
            onMouseLeave={() => {
              setHoverOn('none')
              setPrevHover(icon as Skill)
            }}
          >
            <img
              key={index}
              src={`/skills/${icon}.svg`}
              alt={icon}
              className="h-full aspect-auto"
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full grid grid-cols-2 place-content-center h-screen gap-[11rem] items-center">
      <ViewDiv
        className="flex flex-col font-bold gap-16 justify-self-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{
          once: true,
        }}
      >
        <Picture
          src="/skills/skills_image.png"
          alt="Skills"
          className="w-[23rem]"
        />
        <div>
          <p className="text-4xl">I DO A LOT OF</p>
          <div className="h-fit overflow-y-hidden">
            <motion.h1
              className="text-[3rem] uppercase overflow-y-hidden absolute"
              initial={{ y: -50, rotateX: 90, translateZ: 0, opacity: 0 }}
              animate={{ y: 0, rotateX: 0, translateZ: 180, opacity: 1 }}
              key={hoverOn}
              transition={{ duration: 0.5 }}
              style={{
                color: colorMapSkill[hoverOn],
              }}
            >
              {hoverOn === 'none' ? 'things' : hoverOn.replace('_', ' ')}.
            </motion.h1>
          </div>
          <div className="h-fit overflow-y-hidden absolute">
            <motion.h1
              className="text-[3rem] uppercase overflow-y-hidden"
              initial={{ y: 0, rotateX: 0, translateY: 0 }}
              animate={{
                rotateX: -90,
                translateY: 20,
              }}
              key={prevHover}
              transition={{ duration: 0.5 }}
              style={{
                color: colorMapSkill[prevHover],
              }}
            >
              {prevHover === 'none' ? 'things' : prevHover.replace('_', ' ')}.
            </motion.h1>
          </div>
        </div>
      </ViewDiv>
      <ViewDiv
        className="text-xl flex flex-col gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{
          once: true,
        }}
      >
        <p>Arts.</p>
        <SkillIcons icons={['davinci', 'figma']} />
        <p>Full-stacl web dev.</p>
        <SkillIcons
          icons={['typescript', 'next', 'react', 'tailwind', 'nodejs', 'sql']}
        />
        <SkillIcons icons={['react_native', 'expo']} />
        <p>Datenwissenschaftler.</p>
        <SkillIcons icons={['python', 'pytorch', 'keras', 'huggingface']} />
      </ViewDiv>
    </section>
  )
}

export default Skills
