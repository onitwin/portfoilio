import React from 'react';


const Project=({item})=>{
  //individual project. responsible for arrangement of each project in portfilio




  return(
    <div className="project-container-inner">

    <div className="project-details-container">

    <div className="project-image-container">
    <div className="title-container">
    <a href={item.link}><h3 className="project-title">{item.projectName}</h3></a>
    </div>
    <div className="project-image-inner">
    <img className={item.className} src={item.image}/>
    </div>
    </div>
    <div className="project-description-container">
    <article><p>{item.detailedDescription} </p></article>
    <div className="tech-stack-container">
    <div className="tech-stack-descriptor">
    <div className="tech-stack-textbox">
    <h2>Tech Stack</h2>
    </div>
    <div className="tech-stack-icons-container">
    <h2>hello</h2>
    <h2>Hi</h2>
    </div>
    </div>
    </div>
    </div>

    </div>
    </div>
  )
}

export default Project;

// <div className="title-container">
// <h3 className="project-title">{item.projectName}</h3>
// </div>
