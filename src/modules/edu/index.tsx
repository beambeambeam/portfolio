import Picture from '@/components/Picture'
import ViewDiv from '@/components/ViewDiv'

const Edu = () => {
  return (
    <ViewDiv className="grid h-screen w-full grid-cols-[auto_1fr]">
      <Picture
        src="/edu/uni.png"
        alt="Education"
        className="aspect-auto h-screen"
      />
      <div className="start flex h-full w-full flex-col justify-center gap-2 px-12">
        <h1 className="text-4xl">EDUCATION</h1>
        <div className="text-2xl">currently &lt;3 at</div>
        <p className="text-2xl">
          Bachelor of Engineering Program in Computer Engineering
        </p>
        <p className="self-end text-2xl">Petchara Pra Jom Klao Scholarship</p>
        <p className="self-end text-2xl">(Creative & Invention)</p>
        <p className="self-end text-2xl">KMUTT</p>
      </div>
    </ViewDiv>
  )
}

export default Edu
