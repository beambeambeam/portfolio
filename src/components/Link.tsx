type LinkProps = {
  title: string
  links: string
}

const Link = ({ title, links }: LinkProps) => {
  return (
    <div className="text-2xl">
      <div className="font-bold">[{title}]</div>
      <button className="cursor-pointer font-light text-gray-400">
        ({links})
      </button>
    </div>
  )
}

export default Link
