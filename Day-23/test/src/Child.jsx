import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div style={{height : "70vh" , width : "80vw" , backgroundColor : "lightblue" , display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection : "column"}}>
      Child
      <GrandChild  />
      </div>
  )
}

export default Child