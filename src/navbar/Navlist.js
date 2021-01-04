import React from 'react'
import {Link} from "react-router-dom";


const Navlist=()=>{


  return(
    <div className="Nav-Links-Container">
    <ul className="Nav-links">
    <li><Link to="/portfolio">Portfolio</Link></li>
    <li><Link to="/about">About Me</Link></li>
    <li><Link to="/testimonials">Testimonials</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>
    </div>
  )
}

export default Navlist;
