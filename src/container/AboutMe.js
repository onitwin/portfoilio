import React from 'react'
import PageHeader from "../pageHeaders/PageHeader"
import MyBackground from "../me/MyBackground"
import "../me/myBackgroundStyle.scss"


const AboutMe=()=>{


  return(
    <div className="about-me-container">
    <PageHeader title="About Me"/>
    <MyBackground/>
    </div>
  )
}

export default AboutMe;
