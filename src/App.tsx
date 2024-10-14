import Landing from '@/modules/landings'
import Skills from '@/modules/skills'
import Edu from '@/modules/edu'
import Exp from '@/modules/exp'

const App = () => {
  return (
    <div className="font-geist bg-black text-white">
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
