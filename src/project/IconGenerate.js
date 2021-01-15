import React from 'react'


const IconGenerate=({item})=>{

const stack=item.techstack.map((logo,key)=>{
  const route=`/images/${logo}.png`
  return(
    <img className="icon-image" src={route} alt={logo} key={logo.index}/>
  )
})


  return(
    <div className="icon-container">
    {stack}
    </div>
  )
}

export default IconGenerate;
