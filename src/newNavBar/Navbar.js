import React from 'react';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu.js'
import './navbarstyle.scss'



const Navbar=()=>{

  return(
    <nav className="nav-header">
    <Logo/>
    <HamburgerMenu/>
    </nav>
  )
}

export default Navbar;
