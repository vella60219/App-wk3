import React from "react";
import { View, Text } from "react-native";

const DetailScreen = ({ route }) => {
    return(
        <View style={{flex: 1}}>

            <Text>{route.params.title}</Text>

        </View>
    );

};

export default DetailScreen;