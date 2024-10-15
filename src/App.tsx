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
      <main className="bg-black text-white font-sans absolute w-full">
        <Landing />
        <section className="pb-[12rem] my-[10rem]">
          <Skills />
        </section>
        <section className="my-[10rem]">
          <Edu />
        </section>
        <section className="py-[10rem]">
          <Exp />
        </section>
        <section className="pb-[16rem]">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}
export default App
