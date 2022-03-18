import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, SectionList, Text, View, Image } from 'react-native';
import BookList from "./src/components/BookList";


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" />

      <BookList/>

     

    </SafeAreaView>
  );
}


