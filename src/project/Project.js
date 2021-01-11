import React from 'react';


const Project=({item})=>{
  //individual project. responsible for arrangement of each project in portfilio




  return(
    <div className="project-container-inner">
    <div className="title-container">
    <h3 className="project-title">{item.projectName}</h3>
    </div>
    <div className="project-details-container">
    <img className={item.className} src={item.image}/>

    </div>
    </div>
  )
}

export default Project;
