import { motion, useScroll, useTransform } from 'framer-motion'

const Points = [
  {
    title: 'landing',
    anchor: 'landing',
  },
  {
    title: 'skills',
    anchor: 'skills',
  },
  {
    title: 'education',
    anchor: 'education',
  },
  {
    title: 'experience',
    anchor: 'experience',
  },
  {
    title: 'contact',
    anchor: 'contact',
  },
]

const Navbar = () => {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  const NavbarChild = () => {
    return (
      <motion.div
        className="fixed z-10 text-white w-full flex justify-end gap-6 p-6"
        style={{ opacity }}
        whileHover={{ opacity: 1 }}
        onMouseLeave={
          opacity.get() === 0
            ? () => {
                opacity.set(1)
              }
            : () => {}
        }
      >
        {Points.map((point, index) => (
          <a
            key={index}
            href={`#${point.anchor}`}
            className="hover:text-gray-400 flex flex-row gap-2 items-center"
          >
            <Icon />
            <p>{point.title}</p>
          </a>
        ))}
      </motion.div>
    )
  }

  return <NavbarChild />
}

const Icon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-5"
    >
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  )
}

export default Navbar
