import React from 'react'


const IconGenerate=({item})=>{
console.log(item.techstack)

const stack=item.techstack.map((logo,key)=>{
  console.log(logo)
  return(
    <img className="icon-image" src="/images/javascript.jpg" alt={logo} key={logo.index}/>
  )
})


  return(
    <div className="icon-container">
    {stack}
    </div>
  )
}

export default IconGenerate;
