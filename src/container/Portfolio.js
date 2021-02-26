import React from 'react'
import Projects from "../project/Projects"
import PageHeader from "../pageHeaders/PageHeader"


const Portfolio=({items})=>{



  return(
    <div className="portfolio-container">
    <PageHeader title="Project Portfolio"/>
    <h2 className="portfolio-description">Below are a few of my most recent or favourite projects</h2>
    <Projects items={items}/>
    </div>
  )
}

export default Portfolio;
