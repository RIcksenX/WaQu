import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const log = () => {
  return (
    <View>
      <StatusBar hidden/>
      <View className="flex-1 justify-center items-center">
            <Text className="text-5xl text-light-200 font-bold">hello test</Text>
      </View>
    </View>
  )
}

export default log