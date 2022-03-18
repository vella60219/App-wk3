import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, SectionList, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookScreen from "./src/screens/BookScreen";
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={BookScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />


    </Stack.Navigator>
    </NavigationContainer>
  );
}


