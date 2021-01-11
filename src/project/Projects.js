import React from 'react';
import Project from './Project'


const Projects=({items})=>{
  //map of all projects. responsible for arrangement of each project in portfilio

  const myProjects=items.map((item,key)=>{
    return(
      <Project item={item} key={item.id}/>
    )
  })




  return(
    <div className="projects-container">
    {myProjects}

    </div>
  )
}

export default Projects;
