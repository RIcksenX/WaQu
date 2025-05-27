import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View style={{ margin:100 }}>
      <Text>profile</Text>
      <Link href="../LoginScreen">login</Link>
      <Link href="../SignUpScreen">signup</Link>

    </View>
  )
}

export default profile