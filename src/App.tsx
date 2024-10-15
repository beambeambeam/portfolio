import { Contact } from '@/modules/contact'
import Edu from '@/modules/edu'
import Exp from '@/modules/exp'
import Landing from '@/modules/landing'
import Skills from '@/modules/skills'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

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
