import Picture from '@/components/Picture'
import ViewDiv from '@/components/ViewDiv'

const Edu = () => {
  return (
    <ViewDiv className="h-screen w-full grid grid-cols-[auto_1fr]">
      <Picture
        src="/edu/uni.png"
        alt="Education"
        className="h-screen aspect-auto"
      />
      <div className="h-full w-full flex flex-col start justify-center px-12 gap-2">
        <h1 className="text-4xl">EDUCATION</h1>
        <div className="text-2xl">currently &lt;3 at</div>
        <p className="text-2xl">
          Bachelor of Engineering Program in Computer Engineering
        </p>
        <p className="text-2xl self-end">Petchara Pra Jom Klao Scholarship</p>
        <p className="text-2xl self-end">(Creative & Invention)</p>
        <p className="text-2xl self-end">KMUTT</p>
      </div>
    </ViewDiv>
  )
}

export default Edu
