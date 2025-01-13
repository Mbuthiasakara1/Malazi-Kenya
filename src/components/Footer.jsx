import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
         <svg
        className="footer-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000000"
          fillOpacity="1"
          d="M 0 160 L -1 2 C 82 16 274 45 382 52 C 513 49 534 52 603 39 C 702 34 751 18 848 5 C 970 -2 996 -1 1123 5 C 1188 7 1260 13 1339 20 C 1422 29 1412 28 1442 33 L 1442 161 L 1440 320 L 1400 320 C 1360 320 1280 320 1200 320 C 1120 320 1040 320 960 320 C 880 320 800 320 720 320 C 640 320 560 320 480 320 C 400 320 320 320 240 320 C 160 320 80 320 40 320 L 0 320 Z"
        ></path>
      </svg>
        <img
            src='images/no-background.png'
            alt='Logo'
            className='footer-logo'
        />
        <div className='footer-info'>
            <h3>Malazi Kenya</h3>
            <p>
                Have an idea? Reach out to us and let's talk about it.
            </p>
        </div>
        <div className='quick-links'>
            <h3>Quick Links:</h3>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Portfolio</Link></li>
                <li><Link>Contact Us</Link></li>
            </ul>
        </div>
        <div className='footer-contact'>
            <h3>Contact us:</h3>
            <p><MdOutlineEmail /><Link to='mailto:'>infomalazikenya@gmail.com</Link></p>
            <p><FiPhone /><Link to='tel:'>+254 705 26872</Link></p>
            <p><IoLocationOutline />Nairobi</p>
            <div className='socials'>
            <FaXTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedin />
            </div>
        </div>
    </div>
  )
}

export default Footer