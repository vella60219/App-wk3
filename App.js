import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from "./src/navigation";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <Navigation/>
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


