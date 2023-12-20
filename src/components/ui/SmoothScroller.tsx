'use client'

import Lenis from '@studio-freight/lenis'
import { FC, useEffect } from 'react'

interface SmoothScrollerProps {

}

const SmoothScroller: FC<SmoothScrollerProps> = ({ }) => {
  useEffect(() => {
    const lenis = new Lenis()


    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (<></>)
}

export default SmoothScroller