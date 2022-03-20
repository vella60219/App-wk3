import React from "react";
import { Flex } from "native-base";

import BookList from "../components/BookList";

const BookScreen = ({ navigation }) => {
    return(
        <Flex flex={1} bg='#fff' >
            <BookList navigation={navigation} />
        </Flex>
    );

};

export default BookScreen;