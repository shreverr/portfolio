import HeroSection from "@/components/HeroSection"
import SmoothScroller from "@/components/ui/SmoothScroller"

export default function Home() {
  return (<>
    <SmoothScroller />
    <main className='px-4 flex flex-col container'>
      <HeroSection />
    </main>
  </>
  )
}
