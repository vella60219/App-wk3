import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BookMarkButton from "../components/BookMarkButton";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import BookScreen from "../screens/BookScreen";
import DetailScreen from "../screens/DetailScreen";
import WishlistScreen from '../screens/WishlistScreen';
import MyBooksScreen from "../screens/MyBooksScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
};


const MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
            tabBarActiveTintColor: '#6200EE',
            tabBarInactiveTintColor: '#666666',
            headerShown: false,
          // headerShown: false
            tabBarLabelStyle: {
                fontWeight: '500',
                fontSize: 12,
                letterSpacing: 0.4,
            },
            tabBarIconStyle: {
                marginTop: 11,
            },
            headerStyle: { 
                headerShadowVisible: false,
                        shadowColor: 'transparent',
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                        borderBottomColor: 'transparent',
              },
        }}
      >
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStack}
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen 
          name="WishlistStack" 
          component={WishlistScreen} 
          options={{
            headerShown: false,
            title: "Wishlist",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen 
          name="MyBooksStack" 
          component={MyBooksScreen} 
          options={{
            headerShown: false,
            title: "My books",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

const HomeStack = () => {
    return (
          <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BookScreen}
                options={{
                    
                    headerShadowVisible:false,
                    title: null,
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                    },
                    // searchBar: 0,
                    // headerSearchBarOptions: {
                    //     autoCapitalize: 'none',
                    //     obscureBackground: false,
                    //     onCancelButtonPress: false,
                    //     hideWhenScrolling: true,
                    //   },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          size={24}
                        />
                      ),
                      headerRight: () => (
                        <MaterialCommunityIcons
                          name={'magnify'}
                          size={24}
                        />
                      ),
                }}
                
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: null,
                    headerBackTitleVisible: false,
                    headerShadowVisible:false,
                    headerTintColor: '#131313',
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:0,
                        
                    },
                    // headerLeftContainerStyle:{
                    //     backgroundColor:"#666",
                    //     paddingLeft:50,
                    // },
                    // headerLeft:() =>( 
                    //     <button onPress={() => goBack()}>
                    //     <MaterialIcons
                    //         name={'navigate-before'}
                    //         size={33}
                    //         style={{marginLeft: 0}}
                            
                    //     />
                    //     </button>
                    // ),
                    headerRight:() => ( <BookMarkButton/> ),
                }}
            />
        </Stack.Navigator>
      );
};

export default Navigation;