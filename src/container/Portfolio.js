import React from 'react'
import Projects from "../project/Projects"


const Portfolio=({items})=>{



  return(
    <div className="portfolio-container">
    <div className="portfolio-header-wrapper">
    <h1 className="portfolio-header">Project Portfolio</h1>
    </div>
    <h2 className="portfolio-description">Below are a few of my most recent or favourite projects</h2>
    <Projects items={items}/>
    </div>
  )
}

export default Portfolio;
