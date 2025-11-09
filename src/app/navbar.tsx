import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md h-[65px] w-full text-black z-50 shadow-sm'>
      <div className='flex justify-between items-center px-6 md:px-[45px] h-full'>
        <div className='text-[20px] font-bold'>Puxpui</div>

        <div className="hidden md:flex gap-[25px] items-center font-semibold text-[17px]">
          <Link href="/" className="nav-hover text-black hover:text-violet-600 transition">
            Home
          </Link>
          <Link href="/#" className="nav-hover text-black hover:text-violet-600 transition">
            About Me
          </Link>
          <Link href="/#" className="nav-hover text-black hover:text-violet-600 transition">
            Project
          </Link>
          <Link href="/#" className="nav-hover text-black hover:text-violet-600 transition">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
