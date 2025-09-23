import { useEffect, useState } from "react"
import Card from "./Card";

const Effect = () => {

    const [data , setData] = useState([]);
    const [id , setId] = useState(null);
    const [open , setOpen] = useState(false);
    const [productData , setProductData] = useState({});

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
    const fetchDataWithId = async (productId)=>{
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const productData = await response.json();
            // setData(productData);
            setProductData(productData)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(()=>{
       if(id){
         fetchDataWithId(id);
       }
    },[id])

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
            
            <Card title={item.title} description={item.description} image={item.image} setOpen={setOpen} setId={setId} id={item.id} />
            
        )
    })}
        </div>

        {open && (
            <div className="modal">
            <div className="modal-container">
                <button onClick={()=>{setOpen(false);setId(null);setProductData({})}}>X</button>
                <div>
                    <img src={productData.image} alt="" style={{width :"25%"}} />
                </div>
            </div>
            </div>
        )}
        </div>
  )
}

export default Effect