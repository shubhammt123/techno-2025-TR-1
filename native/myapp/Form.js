import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Form = () => {
    const [formData , setFormData] = useState({});

    const handleChange = (name,value)=>{
        setFormData({...formData , [name] : value})
    }

    const handleSubmit = ()=>{
        
    }

    console.log(formData)
  return (
    <View style={{gap : 20 , justifyContent : "center" }}>
        <Text style={{fontSize : 30 , textAlign : "center"}}>
            Login Form
        </Text>
      <TextInput style={{borderWidth :  1 , padding :   10 , fontSize : 25 , margin   : 20}} placeholder='Email' onChangeText={(text)=>{handleChange("email",text)}} />
      <TextInput style={{borderWidth :  1 , padding :   10 , fontSize : 25 , margin   : 20}} placeholder='Password'  onChangeText={(text)=>{handleChange("password",text)}} />
      <View style={{margin : 20}}>
        <Button title='Login' onPress={()=>{

        }} />
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})