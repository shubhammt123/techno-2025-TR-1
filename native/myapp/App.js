import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import Home from './Home';

export default function App() {
  const  [count , setCount] = useState(0)
  const [buttonBackgroundColor , setButtonBackgroundColor] = useState("white");
  const [buttonTextColor , setButtonTextColor] = useState("orange");
  return ( 
    <>
    
    {/* <View style={styles.container}>
      <Text  style={styles.para}>
        Hello My Name is shubham
      </Text>
    </View>
    <View style={styles.item}>

    </View> */}
    {/* <View style={{flex : 1 , justifyContent : "center" , alignItems : "center"} }>
      
      <Button title="Inc Count(+)" style={styles.para} color="midnightblue" onPress={()=>{
        setCount(count+1)
      }} />
      <Text style={styles.para}>
        {count}
      </Text>
      <Button title="Dec Count(-)" style={styles.para} color="midnightblue" onPress={()=>{
        setCount(count-1)
      }} disabled={count<=0} />
    </View> */}
    <Home />
    <View style={{justifyContent :   "center" , alignItems : "center"}}>
      <Pressable onPressIn={()=>{setButtonBackgroundColor("orange") ; setButtonTextColor("white")}} onPressOut={()=>{setButtonBackgroundColor("white") ; setButtonTextColor("orange")}}>
      <View style={{borderWidth : 2 , padding :  10 , borderColor : "orange" , backgroundColor  : buttonBackgroundColor}}>
        <Text style={{fontSize : 20 , color : buttonTextColor}}>
          Click Me
        </Text>
      </View>
    </Pressable>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "yellow",
    padding : 30,
    width : 400,
    borderWidth : 10,
    borderColor : "orange",
    borderRadius : 20,
    elevation : 20,
    shadowColor : "green",
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  para : {
    fontSize : 40,
    color : "red",
  },
  item : {
    width : 400,
    backgroundColor : "blue",
    flex  : 2
  }
})
