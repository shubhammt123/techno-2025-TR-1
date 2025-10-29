import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const List = () => {

    const [productData , setProductData] = useState([]);

    const fetchData = async ()=>{
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            console.log(data)
            setProductData(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <View style={{flexDirection : "row" , flexWrap : "wrap" , gap : 10}}>
      {
        productData.map((item)=>(
            <View key={item.id}>
                <Image source={{uri : item.image}} style={{width : 250 , height : 300}} />
            </View>
        ))
      }
    </View>
  )
}

export default List

const styles = StyleSheet.create({})