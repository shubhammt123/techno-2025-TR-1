import { useEffect, useState } from "react"
import Card from "./Card";

const Effect = () => {

    const [data , setData] = useState([]);
    const [count , setCount] = useState(0);

    const fetchData = async ()=>{
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const productData = await response.json();
            setData(productData);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const style = {
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        backgroundColor : "red"
    }

  return (
    <div>
        <div style={style}>
            <button>Inc Count(+)</button>
            <h1>Count : {count}</h1>
            <button>Dec Count(-)</button>
        </div>

        <div className="container">
            {data.map((item)=>{
        return (
            
            <Card title={item.title} description={item.description} image={item.image} />
            
        )
    })}
        </div>
        </div>
  )
}

export default Effect