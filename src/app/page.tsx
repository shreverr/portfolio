import HeroSection from "@/components/HeroSection"
import Model from "@/components/Model"
import SmoothScroller from "@/components/ui/SmoothScroller"

export default function Home() {
  return (<>
    <SmoothScroller />
    <main className='px-4 flex flex-col container'>
      <Model className="fixed z-0" />
      <HeroSection />
      <section className="h-screen"></section>
    </main>
  </>)
}
