type LinkProps = {
  title: string
  links: string
}

const Link = ({ title, links }: LinkProps) => {
  return (
    <div className="text-2xl">
      <div className="font-bold">[{title}]</div>
      <button
        onClick={() => navigator.clipboard.writeText(links)}
        className="cursor-pointer font-light text-gray-400"
      >
        ({links})
      </button>
    </div>
  )
}

export default Link
