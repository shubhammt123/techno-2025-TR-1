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
    <View style={{flexDirection : "row" , flexWrap : "wrap" , gap : 20 , justifyContent : "center" , alignItems  : "center" , margin : 20}}>
      {
        productData.map((item)=>{
          console.log(item.title.slice(1,5))
            return(
              <View key={item.id} style={{backgroundColor : "#ebebebff" , padding : 20 , borderRadius : 10, elevation : 5 , gap : 20}}>
                <Image source={{uri : item.image}} style={{width : 220 , height : 300}} />
                <Text style={{textAlign : "center" , fontSize : 20}}>
                  {item.title.slice(0,15)}...
                </Text>
                <Text style={{fontSize  : 25 , textAlign : "center"}}>
                  Rs. {item.price}
                </Text>
            </View>
            )
})
      }
    </View>
  )
}

export default List

const styles = StyleSheet.create({})