import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">Readify</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
        <li><a href="/">Home</a></li>
        <li><a href="/pages">Pages</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/store">Store</a></li>
        <li><a href="/contact">Contacts</a></li>
        <li><button className="login-button">Login</button></li>
      </ul>
      <button className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
