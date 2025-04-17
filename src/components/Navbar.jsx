import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full bg-primary z-50'>
      <div className='max-w-[1280px] mx-auto flex justify-between items-center px-6 py-6'>
        {/* Logo + Text */}
        <div className='flex items-center'>
          <img src={logo} alt='AINA Tech Solution' className='w-[100px] h-[100px]' />
          <div className='ml-4 text-white font-poppins font-semibold text-[20px] hidden sm:block leading-tight'>
            <div>Artificial Inteligence Network &</div>
            <div>Automation Technology Solution</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className='list-none sm:flex hidden justify-end items-center gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.id} className='font-poppins font-normal text-white text-[16px] cursor-pointer'>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='sm:hidden flex'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${toggle ? 'flex' : 'hidden'} sm:hidden flex-col items-end px-6 pb-4`}>
        <ul className='list-none flex flex-col bg-black-gradient w-full rounded-xl p-6 gap-4'>
          {navLinks.map((nav) => (
            <li key={nav.id} className='font-poppins font-normal text-white text-[16px] cursor-pointer'>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
