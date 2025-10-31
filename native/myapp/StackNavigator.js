import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import ChangePassword from './ChangePassword';
import UpdatePaymant from './UpdatePaymant';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    
        <Stack.Navigator initialRouteName='Profile Page'  >
          <Stack.Screen name='Profile Page' component={Profile} />
        <Stack.Screen  name='Change Passwors' component={ChangePassword} />
        <Stack.Screen name='Update Payment' component={UpdatePaymant} />
    </Stack.Navigator>

  )
}

export default StackNavigator

const styles = StyleSheet.create({})