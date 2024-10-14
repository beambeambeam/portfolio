import Clock from '@/components/Clock'
import BeamIcon from '@/components/Icons/Beam'
import ViewDiv from '@/components/ViewDiv'

const Landing = () => {
  return (
    <ViewDiv className="grid h-screen grid-rows-2 px-[6rem]">
      <div className="flex h-full items-center">
        <BeamIcon className="h-[10vh]" />
      </div>
      <div className="flex flex-col">
        <div className="grid h-fit w-full grid-cols-2">
          <div className="grid grid-cols-[auto_auto] items-center justify-start gap-6">
            <div className="flex flex-col font-medium">
              <p>My Local Times.</p>
              <Clock />
              <p>GMT+7</p>
            </div>
            <div className="text-xl">
              <p className="text-[1.5rem]">
                But you can call me <b className="font-bold">ANYTIME</b>
              </p>
              <p>Base in 13.7563° N, 100.5018° E</p>
              <p>BANGKOK, THAILAND</p>
            </div>
          </div>
          <div className="flex flex-col items-end text-end text-[2rem]">
            <h1>Hi!, My friend call me Beam! I’m</h1>
            <h1>a student who passion in Software</h1>
            <h1>Engineering, Design and Matamatics model</h1>
            <h2>compute with Computer Ai*</h2>
            <h2>Welcome to My Portfolio.</h2>
          </div>
        </div>
      </div>
    </ViewDiv>
  )
}

export default Landing
