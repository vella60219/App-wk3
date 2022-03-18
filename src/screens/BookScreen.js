import React from "react";
import { View } from "react-native";
import BookList from "./src/components/BookList";

const BookScreen = ({ navigation }) => {
    return(
        <View style={{flex: 1}}>
            <BookList/>
        </View>
    );

};

export default BookScreen;