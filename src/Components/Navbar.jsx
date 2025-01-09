import React from 'react'
import './Navbar.css'
import { NavLink} from 'react-router-dom'
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  return (
    <>
    <div className='nav-container'>
      <div className='logo-container'>
        <img
        src='images/logo.jpeg'
        alt='malazi-logo'
        className='logo'
      />
      <h2>Malazi Kenya</h2>
      </div>
      
      <nav className='navbar'>
        <ul>
          <li> <NavLink to = "/">Home</NavLink> </li>
          <li> <NavLink to = "/about">About Us</NavLink> </li>
          <li> <NavLink to = "/services">Our Services</NavLink> </li>
          <li> <NavLink to = "/portfolio">Portfolio</NavLink> </li>
          <li> <NavLink to = "/contact">Contact Us</NavLink> </li>
        </ul>
      </nav>
      <button className='nav-btn'>
      Company Profile <MdOutlineFileDownload />
      </button>
    </div>
    <hr />
    </>
    

  )
}

export default Navbar;
