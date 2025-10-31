import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button title='Contact Us' onPress={()=>{
        navigation.navigate("Contact");
      }} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})