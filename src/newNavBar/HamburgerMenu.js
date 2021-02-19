import React ,{Fragment} from 'react'
import {Link} from "react-router-dom";

const HamburgerMenu=()=>{

  const menuInvert=()=>{
    const burger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('.nav-header');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}



return(
  <Fragment>
  <img className="hamburger-icon" src="/Images/githubgold.png" onClick={menuInvert}/>
  <ul className="nav-links">
  <li><Link to="/portfolio" className="link-class-list"><p>Portfolio</p></Link></li>
  <li><Link to="/about" className="link-class-list"><p>About Me</p></Link></li>
  <li><Link to="/testimonials" className="link-class-list"><p>Testimonials</p></Link></li>
  <li><Link to="/contact" className="link-class-list"><p>Contact</p></Link></li>
  </ul>
  </Fragment>
)




}

export default HamburgerMenu
