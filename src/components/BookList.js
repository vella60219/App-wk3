import React from "react";
import { Box, Text } from "native-base";
import { FlatList, SectionList } from "react-native";

import BookDetail from "./BookDetail";
import sections from "../json/books.json";

const BookList = ({ navigation }) => {
    
    const renderSectionHeader = ({section}) => (
        <>
            <Text
                fontSize='24'
                fontWeight='500'
                letterSpacing='0.3'
                marginLeft='20px'
            >{section.title}</Text>
            <Box>
                <FlatList
                    horizontal={true}
                    data={section.data}
                    renderItem={({ item }) => <BookDetail book={item} navigation={navigation} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item.title }
                    contentContainerStyle={{paddingLeft: 15, paddingRight: 15}}
                />
            </Box>
        </>
    );

    const renderItem = ( ) => {
        return null;
    };

    return (
        <SectionList
            sections={sections}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            keyExtractor={ item => item.title }
        />
    );
};

export default BookList;