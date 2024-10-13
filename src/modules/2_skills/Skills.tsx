import { useState } from 'react'
import { Skill } from '@/modules/2_skills/schema'
import { motion } from 'framer-motion'

type SkillIconProps = {
  icons: string[]
}

const Skills = () => {
  const [hoverOn, setHoverOn] = useState<Skill>('none')

  const SkillIcons = ({ icons }: SkillIconProps) => {
    return (
      <div className="flex flex-row gap-3 p-4 items-center">
        {icons.map((icon, index) => (
          <div
            className="w-fit h-fit"
            onMouseEnter={() => setHoverOn(icon as Skill)}
            onMouseLeave={() => setHoverOn('none')}
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
    <section className="w-full grid grid-cols-2 place-content-center h-screen gap-[11rem] items-center ">
      <motion.div
        className="flex flex-col font-bold gap-16 justify-self-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{
          once: true,
        }}
      >
        <img
          src="./src/assets/skills_image.png"
          alt="Skills"
          className="w-[21rem]"
        />
        <div>
          <p className="text-4xl">I DO A LOT OF</p>
          <div className="h-fit overflow-y-hidden">
            <motion.h1
              className="text-[3rem] uppercase overflow-y-hidden"
              initial={{ y: -50, rotateX: 90 }}
              animate={{ y: 0, rotateX: 0 }}
              key={hoverOn}
              transition={{ duration: 0.35 }}
            >
              {hoverOn === 'none' ? 'things' : hoverOn.replace('_', ' ')}.
            </motion.h1>
          </div>
        </div>
      </motion.div>
      <motion.div
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
      </motion.div>
    </section>
  )
}

export default Skills
