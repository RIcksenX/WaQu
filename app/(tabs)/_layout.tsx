import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{ 
                title: 'Map',
                headerShown: false
             }}
        />
        <Tabs.Screen
            name='log'
            options={{ 
                title: 'Log',
                headerShown: false
             }}
        />
        <Tabs.Screen
            name='camera'
            options={{ 
                title: 'Camera',
                headerShown: false
             }}
        />
        <Tabs.Screen
            name='profile'
            options={{ 
                title: 'Profile',
                headerShown: false
             }}
        />
        <Tabs.Screen
            name='alert'
            options={{ 
                title: 'Alert',
                headerShown: false
             }}
        />
        <Tabs.Screen
        name="LoginScreen"
        options={{
          title: 'Log In'
        }}
        />
        <Tabs.Screen
            name="SignUpScreen"
            options={{
            title: 'SignUp'
         }}
        />
    </Tabs>
  )
}

export default _layout