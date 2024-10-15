import Link from '@/components/Link'
import Picture from '@/components/Picture'
import TiltCard from '@/components/TiltCard'
import ViewDiv from '@/components/ViewDiv'

const Contacts = [
  {
    title: 'Email',
    links: 'Supawitmarayat@gmail.com',
  },
  {
    title: 'GitHub',
    links: 'https://github.com/beambeambeam',
  },
]

export const Contact = () => {
  return (
    <ViewDiv className="h-screen w-full grid grid-rows-[1fr_3fr_1fr] px-[6vw] py-[10vh] my-[10vh]">
      <div className="text-[2rem]">
        <h1 className="font-bold">CONTACT ME!</h1>
        <h2 className="font-light">You can call me Beam!</h2>
      </div>
      <div className="grid w-full grid-cols-2 gap-14">
        <div className="w-full justify-end flex">
          <TiltCard>
            <Picture
              src="/contact/doodle.png"
              className="aspect-auto h-[14vh]"
            />
            <Picture
              src="/contact/music.png"
              className="aspect-auto h-[30rem]"
            />
          </TiltCard>
        </div>
        <div className="flex flex-col justify-center gap-8">
          {Contacts.map((item) => {
            return <Link links={item.links} title={item.title} />
          })}
        </div>
      </div>
      <div></div>
    </ViewDiv>
  )
}
