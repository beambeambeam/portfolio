import { motion } from 'framer-motion'

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
  return (
    <motion.div
      className="fixed z-10 text-white"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      {Points.map((point, index) => (
        <a
          key={index}
          href={`#${point.anchor}`}
          className="hover:text-gray-400"
        >
          {point.title}
        </a>
      ))}
    </motion.div>
  )
}

export default Navbar
