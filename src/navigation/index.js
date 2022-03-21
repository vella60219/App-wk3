import React from "react";
import StarRating from 'react-native-star-rating';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ActionButton from 'react-native-action-button';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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


  const onStarRatingPress =(rating) => {
    if (rating) {
        rating =0;
    } else {
        rating = 1
    }
  }

  class GeneralStarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 0
        };
      }
    
      onStarRatingPress() {
        if (this.state.starCount) {
            this.state.starCount =0;
        } else {
            this.state.starCount = 1
        }
      }
    
      render() {
        return (
          <StarRating
            disabled={false}
            iconSet={"bookmark"}
            maxStars={1}
            starSize={14}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress()}
          />
        );
      }
    // return(
    //     <StarRating
    //     disabled={false}
    //     maxStars={1}
    //     iconSet={"bookmark"}
    //     starSize={14}
    //     />
    // );
};

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
                    //headerBackImage : "../img/icon_back",
                    headerTintColor: '#131313',
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:0,
                      
                    },
                    headerRight:() => (
                        // <GeneralStarExample/>
                        // <ActionButton
                        //     renderIcon={(active) => (
                        //         active ? (
                        //             <MaterialCommunityIcons name="bookmark" color={'#131313'} size={18} />
                        //         ) : (
                        //             <MaterialCommunityIcons name="bookmark-outline" color={'#131313'} size={18} />
                        //         )
                        //     )}
                        // />



                        <StarRating
                            disabled={false}
                            maxStars={1}
                            rating={0}
                            emptyStar={'bookmark-border'}
                            fullStar={'bookmark'}
                            iconSet={'MaterialIcons'}
                            starSize={24}
                            // selectedStar={(rating) => this.onStarRatingPress()}
                            // selectedStar={
                            //     {rating}?(rating=1):null
                            // }
                            />
                    )

                }}
                
                
            />
        </Stack.Navigator>
      );
};

export default Navigation;