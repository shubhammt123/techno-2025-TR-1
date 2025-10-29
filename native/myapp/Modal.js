import { Button, StyleSheet, Text, View , Modal } from 'react-native'
import React, { useState } from 'react'

const Model = () => {
    const [visible , setVisible] = useState(false);
  return (
    <>
    <View style={{flex : 1 , justifyContent : "center" , alignItems : "center" , backgroundColor : "lightyellow"}}>
      <Button title='Open Modal' onPress={()=>{setVisible(true)}} />
    </View>
    <Modal visible={visible} animationType='fade' transparent={false} onRequestClose={()=>{setVisible(false)}}>
        <View style={{flex : 1  ,alignItems :  "center" ,}}>
            <Button title='Close Modal' onPress={()=>{setVisible(false)}} />
        </View>
    </Modal>
    </>
  )
}

export default Model

const styles = StyleSheet.create({})