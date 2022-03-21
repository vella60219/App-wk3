import React from "react";
import { Box, Flex, Text, Center, Image, Button, ScrollView } from "native-base";

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
    
var buttonText = `BUY NOW FOR ${price}`

    return(
        <ScrollView flex={1}  bg='#fff'>
            <Flex flex={1} alignItems='center' bg='#fff' >
                <Box
                    mt="8px" mb="28px" 
                    shadowColor= '#414144'
                    shadowOpacity= '0.1'
                    shadowRadius= '32'
                    //shadow={3}
                >
                    <Image
                        h="300" w='210'
                        source={{uri: image}}
                        alt={title}
                    />
                </Box>
                <Box alignItems='center' w='100%' >
                    <Text
                        fontSize='24'
                        fontWeight='500'
                        letterSpacing='0.3'
                        marginBottom='1'
                        color='#131313'
                    >{title}</Text>
                    <Text
                        fontSize='14'
                        fontWeight='400'
                        letterSpacing='0.012'
                        marginBottom='0.5'
                        color='#666666'
                    >{author}</Text>

                    {star_rating ? (
                        <Center
                        width="100%"
                        flexDirection="row"
                        justifyContent='center'
                        >
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={star_rating}
                                fullStarColor={'#FFC41F'}
                                emptyStar = {"star"}
                                emptyStarColor={'#EDEDEF'}
                                halfStarEnabled={true}
                                starSize={14}
                                containerStyle={{justifyContent: "center"}}
                                starStyle={{marginRight: 4}}
                            />
                            <Flex
                                flexDirection="row"
                                justifyContent='center'
                                marginLeft='8px'
                            >
                                <Text
                                    fontSize='14'
                                    fontWeight='400'
                                    letterSpacing='1.2'
                                    color='#131313'
                                >{star_rating_text}</Text>
                                <Text
                                    fontSize='14'
                                    fontWeight='400'
                                    letterSpacing='1.2'
                                    color='#666666'
                                > / 5.0</Text>
                            </Flex>
                        </Center>) : null 
                    }

                </Box>
                <Box w='100%' px='12' mb='28' mt='16px'>
                    <Text
                        fontSize='14'
                        fontWeight='400'
                        letterSpacing='0.012'
                        lineHeight='24'
                        textAlign='center'
                        color='#131313'
                    >{intro}</Text>
                </Box>
                <Box>
                    <Button
                        backgroundColor='#6200EE'
                        fontSize='14'
                        fontWeight='500'
                        letterSpacing='8'
                        w='190' h='36' 
                        justifyContent='center' alignItems='center'
                        textAlign='center'
                    >
                        {buttonText}
                    </Button>
                </Box>
            </Flex>
        </ScrollView>
    );

};


    // imageBox: {
    //     shadowColor: '#414144',
    //     shadowOffset: {
    //         height: 16,
    //         width: 0,
    //     },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 32,
    // },
    

export default DetailScreen;