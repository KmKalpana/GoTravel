// @ts-nocheck
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from "../assets";
const HomeScreen = () => {
    const navigation=useNavigation();
  return (
    <SafeAreaView className="bg-white-100 flex-1 mt-10 relative">
    {/**First part */}
    <View className="flex-row px-6 mt-8 items-center space-x-2">
    <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
      <Text className="text-[#4dABB7] text-3xl font-semibold">Go</Text>
    </View>
    <Text className="text=[#2A2B4B] text-3xl font-semibold">Travel</Text>
    </View>
     {/**Second part */}
     <View  className="px-6 mt-8 space-y-3">
      <Text className="text-[#3c6072] text-[42px]">Enjoy The trip with</Text>
      <Text className="text-[#4dABB7] text-[38px] font-bold">Good Moments</Text>
      <Text className="text-[#3c6072] text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis voluptatibus ducimus non, repellendus sint aperiam sit dolorum, a optio obcaecati fugiat.</Text>
     </View>
     {/**Circle Part*/}
     <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
     <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
     {/**Image Part */}
      <View className="flex-1 relative items-center justify-center">
        <Image
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <View
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen