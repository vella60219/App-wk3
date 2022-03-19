import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import StarRating from 'react-native-star-rating';

const DetailScreen = ({ route }) => {
    const {
        title,
        author,
        image,
        intro,
        price,
        star_rating,
        star_rating_text,
    } = route.params;
    
    return(
        <View style={styles.detailContainer}>
            <View style={styles.imageBox}>
                <Image
                    style={styles.image} 
                    source={{uri: image}}
                />
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.authorText}>{author}</Text>
                {star_rating ? (
                <View style={styles.starBox}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={star_rating}
                        fullStarColor={'#FFC41F'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "flex-start", marginBottom: 8.5}}
                        starStyle={{marginRight: 4}}
                    />
                    <View style={styles.StarTextBox}>
                        <Text style={styles.bookStarText}>{star_rating_text}</Text>
                        <Text style={styles.maxStarText}> / 5.0</Text>
                    </View>
                </View>) : null }
            </View>
            <View style={styles.introBox}>
                <Text style={styles.introText}>{intro}</Text>
            </View>
            <View>
                <Button
                    raised
                    icon={{name: 'add-shopping-cart' }}
                    backgroundColor='#6200EE'
                    title={`BUY NOW FOR ${price}`}
                />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imageBox: {
        marginTop: 8,
        marginBottom: 28,
        shadowColor: '#414144',
        shadowOffset: {
            height: 16,
            width: 0,
        },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    },
    image: {
        height: 300,
        width: 210,
        
    },

    infoBox: {
        width: '100%',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: '500',
        letterSpacing: 0.3,
        marginBottom: 8,
        color: '#131313',
    },
    authorText: {
        fontSize: 14,
        fontWeight: '400',
        letterSpacing: 0.012,
        color: '#666666',
        marginBottom: 8,
    },
    starBox: {
        display: 'flex',
        width: "100%",
        justifyContent: 'center',
        flexDirection: "row",
        marginBottom: 18.5,
    },
    StarTextBox: {
        marginLeft: 8,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "row",
    },
    bookStarText: {
        fontSize: 14,
        fontWeight: '400',
        letterSpacing: 1.2,
        color: '#131313',
    },
    maxStarText:{
        fontSize: 14,
        fontWeight: '400',
        letterSpacing: 1.2,
        color: '#666666',
    },

    introBox: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 28,
    },
    introText:{
        fontSize: 14,
        fontWeight: '400',
        letterSpacing: 0.012,
        lineHeight: 24,
        color: '#131313',
        textAlign: 'center'
    },
    
});

export default DetailScreen;