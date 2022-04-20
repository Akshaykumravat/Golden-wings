import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/showcase'>
          Home
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
          <Link className='links' to='/book'>
            Book Your Ticket
          </Link>
          <Link className='links' to='/login'>
            Login
          </Link>
          <Link className='links' to='/signup'>
            Sign Up
          </Link>
          <Link className='links' to='/show'>
            Show Ticket
          </Link>
          <Link className='links' to='/change'>
            Change password
          </Link>

        </ul>
      </nav>
    </header>
  )
}

export default Header
