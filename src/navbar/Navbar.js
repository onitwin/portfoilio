import React from 'react';
import Logo from './Logo';
import Navlist from './Navlist'
import './navbarstyle.scss'



const Navbar=()=>{
  //header/navbar should have title, links and be RESPONSIVE!


  return(
    <header className="nav-header">
    <Logo/>
    <Navlist/>

    </header>
  )
}

export default Navbar;
