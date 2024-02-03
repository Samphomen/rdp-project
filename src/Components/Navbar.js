import React from 'react'
import Logo from "../Images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className="nav-items">
        {["Home", "About", "Blog", "Pricing", "FAQ"].map((item, index) => (
          <p key={index} className="nav-item">
            {item}
          </p>
        ))}
      </div>
    </nav>
  );
}

export default Navbar