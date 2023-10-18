import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-neutral py-2 text-neutral-content'>
      <div className='align-element flex justify-center sm:justify-end'>
        {/* USER */}


        {/* LINKS */}
        <div className='flex gap-x-6 justify-center sm:justify-end'>
          <Link to='login' className='link link-hover text-xs sm:text-sm capitalize'>Sign in / Guest</Link>
          <Link to='register' className='link link-hover text-xs sm:text-sm capitalize'>Create Acount</Link>
        </div>

      </div>
    </header>
  )
}

export default Header
