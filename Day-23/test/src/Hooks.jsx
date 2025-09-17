import React, { useState } from 'react'

const Hooks = () => {
    // useState
    // let count = 0;

    const [count , setCount] = useState(0);

    const handleIncCount  = ()=>{
        // count += 1;
        // console.log(count)
        setCount(count+1);
    }
    const handleDecCount  = ()=>{
        setCount(count-1);
        // count -= 1;
        // console.log(count)
    }

    console.log(count);
  return (
    <div>
        
        <div>
            <button onClick={handleDecCount}>Dec Count(-)</button>
            <p>Count : {count}</p>
            <button onClick={handleIncCount}>Inc Count(+)</button>
        </div>
    </div>
  )
}

export default Hooks