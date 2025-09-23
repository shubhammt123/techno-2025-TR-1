import { useEffect, useState } from "react"
import Card from "./Card";

const Effect = () => {

    const [data , setData] = useState([]);
    const [count , setCount] = useState(1);

    const fetchData = async ()=>{
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const productData = await response.json();
            setData(productData);
            console.log(productData)
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
        // backgroundColor : "red"
    }

  return (
    <div>

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