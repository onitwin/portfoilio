import React,{Fragment} from "react";
import Project from "../project/Project";
import Navbar from "../navbar/Navbar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Home from "./Home";
import { BrowserRouter as Router,Route } from "react-router-dom";

const MainContainer=()=>{
//main container shoould be responsible for all routes and display bar Navbar


  return(
    <div>
    <Router>
    <Fragment>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={AboutMe}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/testimonials" component={Testimonials}/>
    </Fragment>
    </Router>
    </div>

  )
}

export default MainContainer;
