import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Alertt = () => {
    const showAlert = ()=>{
        Alert.alert(
            "Hello",
            "This is a demo message",
            [
                {
                        text : "cancel",
                        onPress : ()=>{
                            console.log("Cancel button clicked")
                        }
                    },
                {
                    text : "ok",
                    onPress : ()=>{
                        console.log("Ok Button clicked from Alert")
                    }
                },
                
            ]
        )
    }
  return (
    <View style={{flex  :  1 ,  justifyContent :  "center" , alignItems :  "center"}}>
      <Button title='Show Alert' onPress={showAlert} />
    </View>
  )
}

export default Alertt

const styles = StyleSheet.create({})