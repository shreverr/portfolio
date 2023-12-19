import type { FC } from 'react'
import { qwitcherGrypen } from '@/fonts'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  const links = []
  const name = 'Shreshth'

  return (
    <nav className='flex justify-between items-center w-full fixed top-0 left-0 py-1 px-4 backdrop-blur bg-black/20'>
      <div className={`${qwitcherGrypen.className} text-6xl `}>{name}</div>
      
      {<div>

      </div>}
    </nav>
  )
}

export default NavBar
