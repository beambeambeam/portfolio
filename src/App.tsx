import { Contact } from '@/modules/contact'
import Edu from '@/modules/edu'
import Exp from '@/modules/exp'
import Landing from '@/modules/landings'
import Navbar from '@/modules/Navbar'
import Skills from '@/modules/skills'

import Footer from '@/components/Footer'

const App = () => {
  return (
    <div className="absolute w-full">
      <Navbar />
      <div className="bg-black text-white font-sans absolute w-full">
        <Landing />
        <div className="pb-[12rem]">
          <Skills />
        </div>
        <Edu />
        <div className="py-[10rem]">
          <Exp />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
export default App
