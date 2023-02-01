import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <TailwindProvider>  
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>

  );
}