'use client'
import { FC, use, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import TextPlugin from 'gsap/TextPlugin';

interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
  const heroHeading = useRef(null);

  gsap.registerPlugin(TextPlugin)

  useEffect(() => {
    const heroHeadingTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    
    heroHeadingTimeline.to(heroHeading.current, {
      duration: 1,
      text: "a Fullstack developer",
      ease: "none",
      delay: 3
    }, ">");

    heroHeadingTimeline.to(heroHeading.current, {
      duration: 1,
      text: " a DevOps engineer",
      ease: "none",
      delay: 3
    }, ">");

    heroHeadingTimeline.to(heroHeading.current, {
      duration: 1,
      text: "an Entrepreneur",
      ease: "none",
      delay: 3
    }, ">");

    heroHeadingTimeline.to(heroHeading.current, {
      duration: 1,
      text: "Shreshth Verma",
      ease: "none",
      delay: 3
    }, ">");
  })


  return (
    <section className='flex flex-col items-center justify-around font-bold text-2xl md:justify-start md:flex-row md:text-5xl lg:text-7xl xl:text-8xl first-letter box-border h-screen pt-16'>
      <div>
        I am<br />
        <span ref={heroHeading} className=''>Shreshth Verma</span>
        .
      </div>
    </section>
  )
}

export default HeroSection