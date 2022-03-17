import React from "react";

import { Text, View, FlatList, SectionList, StyleSheet } from "react-native";
import PopularBookDetail from "./PopularBookDetail";
import NewestDetail from "./NewestDetail";
import sections from "../json/books.json";

const BookList = () => {

    

    const renderSectionHeader = ({section}) => (
        <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <View style={styles.sectionBox}>
                {section.star_rate ? (
                        <FlatList
                            horizontal={true}
                            data={section.data}
                            renderItem={({ item }) => <NewestDetail book={item} />}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={ item => item.title }
                        />
                    ) : (
                        <FlatList
                            horizontal={true}
                            data={section.data}
                            renderItem={({ item }) => <PopularBookDetail book={item} />}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={ item => item.title }
                        />
                    )
                }
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