'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { to: '/', label: 'Home' },
  { to: '/generate', label: 'Generate' },
  { to: '/my-cvs', label: "My CV's" },
]

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="  w-full sticky top-0 z-20 bg-[#f2d1f7]/50 backdrop-blur-sm" >
      <div className=' mx-auto max-w-5xl w-full flex justify-between items-center py-4 select-none' >
        <span className='text-3xl font-bold' >CVCraft</span>
        <ul className="flex gap-8" >
          {
            links.map(link => (
              <li
                key={link.to}
                className={`text-black/80 hover:text-black/90 active:text-black transition-colors duration-100 text-lg hover:underline cursor-pointer ${pathname === link.to ? 'underline font-bold pointer-events-none' : ''}`}
              >
                <Link href={link.to}>{link.label}</Link>
              </li>
            ))
          }
        </ul>
        <div></div>
      </div>
    </nav>
  )
}

export default NavBar