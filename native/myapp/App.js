import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const  [count , setCount] = useState(0)
  return (
    <>
    
    {/* <View style={styles.container}>
      <Text  style={styles.para}>
        Hello My Name is shubham
      </Text>
    </View>
    <View style={styles.item}>

    </View> */}
    <View style={{flex : 1 , justifyContent : "center" , alignItems : "center"} }>
      
      <Button title="Inc Count(+)" style={styles.para} color="midnightblue" onPress={()=>{
        setCount(count+1)
      }} />
      <Text style={styles.para}>
        {count}
      </Text>
      <Button title="Dec Count(-)" style={styles.para} color="midnightblue" onPress={()=>{
        setCount(count-1)
      }} disabled={count<=0} />
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
