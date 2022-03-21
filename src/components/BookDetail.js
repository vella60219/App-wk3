import React from "react";
import { Box, Text, Image, Pressable } from "native-base";

import StarRating from 'react-native-star-rating';

const NewestDetail = ({ book, navigation })  => {
    return(
        <Box flexDirection='column' > 
            <Box m='8px' > 
                <Pressable
                    onPress={() => navigation.navigate('Detail', book)}
                        shadow= {2}
                >
                    <Image
                    h='200' w='140'
                    mb='16px'
                    source={{uri: book.image}}
                    alt={book.title}
                    />
                </Pressable>
                {book.star_rating ? (
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
                    />) : null
                }
                <Box w='140px' >
                    <Text
                        fontSize='16'
                        fontWeight='500'
                        lineHeight='18px'
                        letterSpacing='0'
                        marginBottom='8px'
                    >{book.title}</Text>
                    <Text
                        fontSize='12'
                        fontWeight='400'
                        color='rgba(19, 19, 19, 0.5)'
                    >{book.author}</Text>
                </Box>
            </Box>
        </Box>
    )
};


export default NewestDetail;