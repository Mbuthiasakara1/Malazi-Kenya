
import './Footer.css'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
   
     
      <img src="images/no-background.png" alt="Logo" className="footer-logo" />
      <div className="footer-info">
        <h3>Malazi Kenya</h3>
        <p>Have an idea? Reach out to us and{ "let's" }talk about it.</p>
      </div>
      <div className="quick-links">
        <h3>Quick Links:</h3>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Portfolio</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact us:</h3>
        <p>
          <MdOutlineEmail />
          <Link to="mailto:">infomalazikenya@gmail.com</Link>
        </p>
        <p>
          <FiPhone />
          <Link to="tel:">+254 705 26872</Link>
        </p>
        <p>
          <IoLocationOutline />
          Nairobi
        </p>
        <div className="socials">
          <FaXTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Footer