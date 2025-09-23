import React, { useEffect, useState } from 'react'

const Effect1 = () => {
    const [counter , setCounter] =  useState(0);
    const [number , setNumber] = useState(0);

    const handleIncCount = ()=>{
        setCounter(counter +1);
    }
    const handleDecCount = ()=>{
        setCounter(counter -1);
    }
    const handleIncNumber = ()=>{
        setNumber(number +1);
    }
    const handleDecNumber = ()=>{
        setNumber(number -1);
    }

   const fetchData = async ()=>{
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const productData = await response.json();
            console.log(productData)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
             console.log("Rerendering");
    console.log("Hello world");
    fetchData();
     console.log("Counter",counter);
     console.log("Number",number);
   
    },[]);
   
  return (
    <div style={{display : "flex"  , justifyContent : "center"  , alignItems : "center" , gap:"20px" , flexDirection  :  "column"}}>
        <div>
            <button onClick={handleDecCount}>Dec Count(-)</button>
        <p>Count : {counter}</p>
        <button onClick={handleIncCount}>Inc Count(+)</button>
        </div>

        <div>
            <button onClick={handleDecNumber}>Dec Number(-)</button>
        <p>Number : {number}</p>
        <button onClick={handleIncNumber}>Inc Number(+)</button>
        </div>
    </div>
  )
}

export default Effect1