import React from 'react';
import IntroImage from "./IntroImage";
import IntroText from "./IntroText";
import './introstyle.scss'

const Intro=()=>{


  return(
    <div className="intro-container">
    <IntroImage />
    <IntroText/>
    </div>
  )
}

export default Intro;
