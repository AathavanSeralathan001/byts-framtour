import React from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <nav>
        <ul className='nav-ul'>
            <li className='nav-li'>
                Home
            </li>
            <li className='nav-li'>
                About
            </li>
            <li className='nav-li'>
                Farms
            </li>
            <li className='nav-li'>
                <img src={logo} alt="logo-png" />
            </li>
            <li className='nav-li'>
                Location
            </li>
            <li className='nav-li'>
                Help
            </li>
            <li className='nav-li'>
                <img src={profile} alt="profile-img"  />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
