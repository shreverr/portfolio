'use client'

import { useEffect, type FC, useState } from 'react'
import { theSuavity } from '@/fonts'
import { navLinks } from '@/types/types'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  const name = 'Shreshth V.'
  const links: navLinks[] = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'About',
      url: '#'
    },
    {
      name: 'Projects',
      url: '#'
    },
    {
      name: 'Contact',
      url: '#'
    }
  ]

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
      setShow(false);
    } else { // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${show ? 'hidden' : 'backdrop-blur bg-black/20'} flex justify-between items-center w-full fixed top-0 left-0 p-4`}>
      <div className={`${theSuavity.className} text-2xl`}>
        {name}
      </div>
      <div className='sm:flex hidden sm:gap-10 lg:gap-20'>
        {
          links.map((link, index) => (
            <a key={index} className='text-xl font-normal' href={link.url}>
              {link.name}
            </a>
          ))
        }
      </div>
    </nav>
  )
}

export default NavBar
