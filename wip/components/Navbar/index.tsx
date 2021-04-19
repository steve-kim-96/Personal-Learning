import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link href='/signup'>
          <a className='nav-item'>Sign Up</a>
        </Link>
        <Link href='/login'>
          <a className='nav-item'>Log In</a>
        </Link>
        <Link href='dnd'>
          <a>Drag and Drop</a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
