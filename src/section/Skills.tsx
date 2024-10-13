const Skills = () => {
  return (
    <section className="w-full flex flex-row place-content-center h-screen gap-[11rem] items-center">
      <div className="flex flex-col font-bold gap-16">
        <img
          src="./src/assets/skills_image.png"
          alt="Skills"
          className="w-[21rem]"
        />
        <div>
          <p className="text-4xl">I DO A LOT OF</p>
          <h1 className="text-[3rem]">THINGS.</h1>
        </div>
      </div>
      <div className="text-xl flex flex-col gap-3">
        <p>Arts.</p>
        <SkillIcons icons={['davinci', 'figma']} />
        <p>Full-stacl web dev.</p>
        <SkillIcons
          icons={['typescript', 'next', 'react', 'tailwind', 'nodejs', 'sql']}
        />
        <SkillIcons icons={['react_native', 'expo']} />
        <p>Datenwissenschaftler.</p>
        <SkillIcons icons={['python', 'pytorch', 'keras', 'huggingface']} />
      </div>
    </section>
  )
}

type SkillIconProps = {
  icons: string[]
}

const SkillIcons = ({ icons }: SkillIconProps) => {
  return (
    <div className="flex flex-row gap-3">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={`/skills/${icon}.svg`}
          alt={icon}
          className="h-16"
        />
      ))}
    </div>
  )
}

export default Skills
