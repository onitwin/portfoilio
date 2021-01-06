import React from 'react'
import {Link} from "react-router-dom";


const Navlist=()=>{


  return(
    <div className="Nav-Links-Container">
    <ul className="Nav-links">
    <li><Link to="/portfolio"><p>Portfolio</p></Link></li>
    <li><Link to="/about"><p>About Me</p></Link></li>
    <li><Link to="/testimonials"><p>Testimonials</p></Link></li>
    <li><Link to="/contact"><p>Contact</p></Link></li>
    </ul>
    </div>
  )
}

export default Navlist;
