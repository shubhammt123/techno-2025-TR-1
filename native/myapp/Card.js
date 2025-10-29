import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={{backgroundColor : "#f5f5f5ff" , padding : 20 , borderRadius : 10 , elevation : 5 , margin : 20 ,  height : 400}}>
      <Image source={{uri : "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"}} style={{width : 400 , height : 300}} />
      <Text style={{fontSize : 30 , margin : 20 , textAlign :  "center"}}>
        Canon 1200D
      </Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})