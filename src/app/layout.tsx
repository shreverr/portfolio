import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import { montserrat } from '@/fonts'
import './globals.css'
import AnimatedCursor from 'react-animated-cursor'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'shreshth verma\'s portfolio',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black text-white flex flex-col items-center justify-center w-full`}>
        <AnimatedCursor
          color="255,255,255"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0.9}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
          innerStyle={{
            backgroundColor: 'white',
            mixBlendMode: 'exclusion'
          }}
        />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
