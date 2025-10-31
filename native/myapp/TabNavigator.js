import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import Ionicons from '@expo/vector-icons/Ionicons';
import StackNavigator from './StackNavigator';

const TabNavigator = () => {
    const  Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'albums' : 'albums-outline';
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        headerShown : false
      })}
    >
        <Tab.Screen name='Home' component={Home}  options={{
          tabBarBadge: 3,
        }} />
        <Tab.Screen name='Profile' component={StackNavigator} />
        <Tab.Screen name='Contact' component={Contact} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})