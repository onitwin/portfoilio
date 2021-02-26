import React from 'react';
import Banner from "../banner/Banner";
import Intro from "../intro/Intro";
import Circuit from "../carousel/Circuit";


const Home=({items})=>{

  return(
    <>
    <Banner/>
    <Intro/>
    <Circuit items={items}/>
    </>

  )
}

export default Home;
