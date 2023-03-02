import React from 'react'
import logo from '../../assests/logo.png'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
    <div id='i-logo' className="nav-logo">
        <img src={logo} alt="" />
    </div>
    <div className='Nav-list'>
        <ul>
            <li>
                <a href="#i-logo">Home</a>
            </li>
            <li>
                <a href="#education">Education</a>
            </li>
            <li>
                <a href="#skill">Skills</a>
            </li>
            <li>
                <a href="#pro">projects</a>
            </li>
            <li>
                <a href="#experi">experience</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
    </nav>
    </>
  )
}

export default Navbar
