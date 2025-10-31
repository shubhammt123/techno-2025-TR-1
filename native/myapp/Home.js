import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Vector from "./assets/icon.png"
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={()=>{
        console.log("Card clicked");
    }} onLongPress={()=>{
        console.log("Long Press Event Called");
    }}>
        <View style={styles.container}>
      {/* <Text style={styles.para}>Hello , My name is shubham jain</Text> */}
      <Image source={{uri : "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"}}  style={{width : 400 , height : 400}} /> 
      <Text style={{fontSize : 30 , marginTop : 20}}>
        Canon 1200D
      </Text>
    </View>
    <Button title='Profile' onPress={()=>{navigation.navigate("Profile")}} />
    </Pressable>
  )
}

export default Home

const styles = StyleSheet.create({
    para : {
        fontSize : 40
    },
    container : {
        justifyContent : "center",
        alignItems : "center",
        padding : 40,
        backgroundColor : "#e7e7e7ff",
        margin  : 40,
        borderRadius : 20,
        elevation : 10
    }
})