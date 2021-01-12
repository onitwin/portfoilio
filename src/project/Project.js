import React from 'react';


const Project=({item})=>{
  //individual project. responsible for arrangement of each project in portfilio




  return(
    <div className="project-container-inner">
    <div className="project-details-container">

    <div className="project-image-container">
    <div className="title-container">
    <h3 className="project-title">{item.projectName}</h3>
    </div>
    <div className="project-image-inner">
    <img className={item.className} src={item.image}/>
    </div>
    </div>
    <div className="project-description-container">
    <article><p>text goes here</p></article>
    <div className="tech-stack-container">Tech Stack:</div>
    </div>

    </div>
    </div>
  )
}

export default Project;

// <div className="title-container">
// <h3 className="project-title">{item.projectName}</h3>
// </div>
