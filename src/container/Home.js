import React,{Fragment} from 'react';
import Banner from "../banner/Banner";
import Intro from "../intro/Intro";
import Circuit from "../carousel/Circuit";


const Home=({items})=>{
console.log(items)




  return(
    <Fragment>
    <Banner/>
    <Intro/>
    <Circuit items={items}/>
    </Fragment>

  )
}

export default Home;
