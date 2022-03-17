import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import StarRating from 'react-native-star-rating';

const BookDetail = props => {
    let { book } = props;
    return(
        <View style={{flexDirection: 'column'}}> 
            <View style={styles.cardContainer}> 
                <Image
                    style={styles.image} 
                    source={{uri: book.image}}
                />
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={book.star_rating}
                    fullStarColor={'#FFC41F'}
                    emptyStar = {"star"}
                    emptyStarColor={'#EDEDEF'}
                    starSize={14}
                    containerStyle={{justifyContent: "flex-start", marginBottom: 8.5}}
                    starStyle={{marginRight: 4}}
                    />
                <View style={styles.textBox}>
                    <Text style={styles.titleText}>{book.title}</Text>
                    <Text style={styles.authorText}>{book.author}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 16,
    },
    image: {
        height: 200,
        width: 140,
        marginBottom: 16,
    },
    textBox: {
        width: 140,
    },
    titleText: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1.2,
        marginBottom: 8,
    },
    authorText: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(19, 19, 19, 0.5)',
    }
});

export default BookDetail;