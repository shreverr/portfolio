'use client'
import { FC, useRef } from 'react'
import { gsap } from "gsap";

interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
  const heroHeading = useRef<HTMLDivElement>(null);

  gsap.to(heroHeading, {
    duration: 2,
    text: "This is the new text",
    ease: "none",
  });

  return (
    <section className='flex items-center font-bold text-9xl first-letter box-border h-screen pt-16 '>
      <div ref={heroHeading}>
        I am a 
        <br />
        developer.
      </div>
    </section>
  )
}

export default HeroSection