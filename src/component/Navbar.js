import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav className="navbar">
    <div className="navbar__text">
      <div className="logo">
      <img src='/img/logo.png' alt="logo" />
    
      </div>
      <ul className="navbar__ul">
        <li>
      <Link to="/"> Home</Link>
        </li>
        <li>
        <Link to="/menue"> Menu</Link>
        </li>
        <li>
        <Link to="/shop"> Shop</Link>
        </li>
        <li>
        <Link to="/newes"> News</Link>
        </li>
        <li>
        <Link to="/contact"> Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default Navbar;