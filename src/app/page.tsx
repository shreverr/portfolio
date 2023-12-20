

import SmoothScroller from "@/components/ui/SmoothScroller"
import Lenis from "@studio-freight/lenis"
import { SyntheticEvent } from "react"


export default function Home() {
  // const lenis = new Lenis()

  // lenis.on('scroll', (event: SyntheticEvent) => {
  //   console.log(event)
  // })

  // function raf(time: any) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)

  return (<>
    <SmoothScroller />
    <main className='p-4 pt-16 flex flex-col container'>
      <section className='flex items-center font-bold text-9xl h-screen'>
        I am a developer.
      </section>
    </main>
  </>
  )
}
