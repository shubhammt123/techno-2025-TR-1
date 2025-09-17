import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [data , setData] = useState([]);

    const fetchData = async ()=>{
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const productData = await response.json();
            setData(productData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);


    
    console.log(data);

  return (
    <div>Effect</div>
  )
}

export default Effect