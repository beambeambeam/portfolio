import Clock from '@/components/Clock'
import BeamIcon from '@/components/Icons/Beam'
import ViewDiv from '@/components/ViewDiv'

const Landing = () => {
  return (
    <ViewDiv className="grid grid-rows-2 px-[6rem] h-screen">
      <div className="flex h-full items-center">
        <BeamIcon className="h-[10vh]" />
      </div>
      <div className="flex flex-col">
        <div className="w-full h-fit grid grid-cols-2">
          <div className="grid grid-cols-[auto_auto] justify-start items-center gap-6">
            <div className="font-medium flex flex-col">
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
          <div className="flex items-end flex-col text-[2rem] text-end">
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
