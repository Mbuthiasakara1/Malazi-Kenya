import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

    const handleDownload = async () => {
      const filePath = "/downloads/Royal assets ltd.pdf";
      const fileName = "Malazi_Kenya_Profile.pdf";

      // Detect iOS devices
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      try {
        if (isIOS) {
          // For iOS devices, fetch the file first
          const response = await fetch(filePath);
          const blob = await response.blob();

          // Create a blob URL
          const blobUrl = window.URL.createObjectURL(blob);

          // Create an invisible iframe
          const iframe = document.createElement("iframe");
          iframe.style.display = "none";
          document.body.appendChild(iframe);

          // Set iframe src to blob URL
          iframe.src = blobUrl;

          // Clean up
          setTimeout(() => {
            document.body.removeChild(iframe);
            window.URL.revokeObjectURL(blobUrl);
          }, 1000);

          // Also open in new tab as fallback
          window.open(filePath, "_blank");
        } else {
          // For non-iOS devices, use standard download
          const link = document.createElement("a");
          link.href = filePath;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();

          // Clean up
          setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
          }, 100);
        }
      } catch (error) {
        console.error("Download failed:", error);
        // Fallback to opening in new tab
        window.open(filePath, "_blank");
      }
    };

 
  return (
    <>
      <div className="nav-container">
        <div className="logo-container" onClick={()=>navigate('/')}>
          <img 
          src="/images/logo.jpeg" 
          alt="malazi-logo" 
          className="logo" />
          <h2>Malazi Kenya</h2>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </div>
        <div className={`menu-container ${isMenuOpen ? 'active' : ''}`}>
        <nav className='navbar'>
          <ul onClick={toggleMenu}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Our Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        <button className="nav-btn" onClick={handleDownload}>
          Company Profile <MdOutlineFileDownload />
        </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
