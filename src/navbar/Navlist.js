import React from 'react'
import {Link} from "react-router-dom";


const Navlist=()=>{


  return(
    <div className="Nav-Links-Container">
    <ul className="Nav-links">
    <li><Link to="/portfolio" className="link-class-list"><p>Portfolio</p></Link></li>
    <li><Link to="/about" className="link-class-list"><p>About Me</p></Link></li>
    <li><Link to="/testimonials" className="link-class-list"><p>Testimonials</p></Link></li>
    <li><Link to="/contact" className="link-class-list"><p>Contact</p></Link></li>
    </ul>
    </div>
  )
}

export default Navlist;
