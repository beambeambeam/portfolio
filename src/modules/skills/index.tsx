import { useState } from 'react'
import { colorMapSkill, Skill } from '@/modules/skills/schema'
import { motion } from 'framer-motion'

import Picture from '@/components/Picture'
import ViewDiv from '@/components/ViewDiv'

type SkillIconProps = {
  icons: string[]
}

const Skills = () => {
  const [hoverOn, setHoverOn] = useState<Skill>('none')
  const [prevHover, setPrevHover] = useState<Skill>('none')

  if (prevHover === hoverOn && prevHover !== 'none') {
    setPrevHover('none')
  }

  const SkillIcons = ({ icons }: SkillIconProps) => {
    return (
      <div className="flex flex-row items-center gap-3 p-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="group relative h-fit w-fit"
            onMouseEnter={() => {
              setHoverOn(icon as Skill)
            }}
            onMouseLeave={() => {
              setHoverOn('none')
              setPrevHover(icon as Skill)
            }}
          >
            <img
              src={`/skills/${icon}.svg`}
              alt={icon}
              className="invisible absolute left-0 top-0 aspect-auto h-full group-hover:visible"
            />
            <img
              src={`/skills/${icon}.svg`}
              alt={icon}
              className="visible aspect-auto h-full brightness-50 group-hover:invisible"
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <section
      className="grid h-screen w-full grid-cols-2 place-content-center items-center gap-[11rem]"
      id="skills"
    >
      <ViewDiv
        className="flex flex-col gap-16 justify-self-end font-bold"
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
              className="absolute overflow-y-hidden text-[3rem] uppercase"
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
          <div className="absolute h-fit overflow-y-hidden">
            <motion.h1
              className="overflow-y-hidden text-[3rem] uppercase"
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
        className="flex flex-col gap-3 text-xl"
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
