import Beam from '@/components/Icons/Beam'

const Footer = () => {
  const links = [
    {
      name: 'Github',
      url: 'https://github.com/beambeambeam',
    },
    {
      name: 'Twitter? It’s X I know.',
      url: 'https://x.com/Beambeambeam007',
    },
    {
      name: 'GEN Z stuff? here My’s Instagram.',
      url: 'https://www.instagram.com/762x35acc/',
    },
  ]
  const Links = () => {
    return (
      <div className="flex flex-col text-[1rem]">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full flex-col aspect-auto bg-[url('/images/footer.png')] h-[24.375rem] flex justify-between p-10">
      <div>
        <Beam />
      </div>
      <Links />
    </div>
  )
}

export default Footer
