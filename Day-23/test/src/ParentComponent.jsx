import React from 'react'
import Child from './Child'

const ParentComponent = () => {
  return (
    <div style={{height : "90vh" , width : "90vw" , backgroundColor : "lightyellow" , display : "flex" ,   justifyContent : "center" , alignItems : "center" , flexDirection  : "column"}}>
        ParentComponent
        <Child  />
    </div>
  )
}

export default ParentComponent