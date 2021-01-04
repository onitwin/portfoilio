import React from "react";
import Project from "../project/Project"
import Navbar from "../navbar/Navbar"
import Banner from "../banner/Banner"

const MainContainer=()=>{
//main container shoould be responsible for all routes and display bar Navbar


  return(
    <div>
    <Navbar/>
    <Banner/>
    <Project/>
    </div>

  )
}

export default MainContainer;
