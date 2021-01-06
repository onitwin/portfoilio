import React,{Fragment} from "react";
import Navbar from "../navbar/Navbar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import ErrorPage from "./ErrorPage"
import Home from "./Home";
import { BrowserRouter as Router,Route ,Switch} from "react-router-dom";

const MainContainer=()=>{
//main container shoould be responsible for all routes and display Navbar


  return(
    <div>
    <Router>
    <Fragment>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={AboutMe}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/testimonials" component={Testimonials}/>
      <Route component={ErrorPage}/>
      </Switch>
    </Fragment>
    </Router>
    </div>

  )
}

export default MainContainer;
