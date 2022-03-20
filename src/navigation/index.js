import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookScreen from "../screens/BookScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
};

const StackNavigator = () => {
    return (
          <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BookScreen}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
            />
        </Stack.Navigator>
      );
};

export default Navigation;