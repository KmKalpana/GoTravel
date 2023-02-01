// @ts-nocheck
import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '../assets'
const Discover = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-white relative mt-10">
      <View className="flex-row items-center justify-between px-6">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[34px]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Discover