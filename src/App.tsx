import Edu from '@/modules/edu'
import Exp from '@/modules/exp'
import Landing from '@/modules/landings'
import Skills from '@/modules/skills'

const App = () => {
  return (
    <div className="bg-black font-geist text-white">
      <Landing />
      <div className="pb-[12rem]">
        <Skills />
      </div>
      <Edu />
      <div className="py-[18rem]">
        <Exp />
      </div>
    </div>
  )
}
export default App
