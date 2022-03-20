import React from "react";
import { Box } from "native-base";

import { Text, View, FlatList, SectionList, StyleSheet } from "react-native";
import BookDetail from "./BookDetail";
import sections from "../json/books.json";

const BookList = ({ navigation }) => {
    
    const renderSectionHeader = ({section}) => (
        <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <View style={styles.sectionBox}>
                <FlatList
                    horizontal={true}
                    data={section.data}
                    renderItem={({ item }) => <BookDetail book={item} navigation={navigation} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item.title }
                />
            </View>
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

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 24,
        fontWeight: '500',
        letterSpacing: 0.3,
        
        marginLeft: 20,
    },
    sectionBox: {
        marginLeft: 4,
        marginRight: 4,
    },
});

export default BookList;