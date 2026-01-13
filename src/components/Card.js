
import React from "react"

const Card = ({name, description})=>{

  return(<div>
       
       <div id="state-title">{name}</div>
       <div id="state-description">{description}</div>
      

  </div>)
}

export default Card