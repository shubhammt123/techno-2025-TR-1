import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation();

  return (
    <View>
      <Pressable onPress={()=>{
        navigation.navigate("Change Passwors")
      }}>
        <View style={styles.links}>
          <Text  style={styles.para}>
            Change Password
          </Text>
        </View>
      </Pressable>
      
      <Pressable onPress={()=>{
        navigation.navigate("Update Payment")
      }}>
<View style={styles.links}>
        <Text style={styles.para}>
          Update Payment
        </Text>
      </View>
      </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  links : {
    padding : 10,
    backgroundColor : "white",
    elevation : 2
  },
  para:{
    fontSize : 20
  }
})