import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, SectionList, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#131313',
  },




});
