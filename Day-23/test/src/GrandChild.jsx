import React, { useContext } from 'react'
import CountContext from './context/CountContext'

const GrandChild = () => {
    const {count , setCount} = useContext(CountContext);
  return (
    <div style={{height : "50vh" , width : "60vw" , backgroundColor : "lightcoral"  , display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection : "column" , gap : "20px"}}>
        GrandChild
        <button onClick={()=>{setCount(count -1)}}>Dec Count(-)</button>
        <p>Count : {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Inc Count(+)</button>
    </div>
  )
}

export default GrandChild

// prop drilling
// global level 