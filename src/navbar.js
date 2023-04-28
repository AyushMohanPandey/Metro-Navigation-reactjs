import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <>
        <nav className='navbar'>
          {/* Logo part */}
          <div className='logo'> 
            <img src="logo.png" alt="logo" /> 
          </div>
          {/* links part */}
          <div className='menu-link'>
            <ul>
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About Us</NavLink>
              </li>
              <li>
                <a href="https://www.dmrcsmartcard.com/">Recharge</a>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar