import React, { Component } from 'react';
import { Button } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default class BookMarkButton extends Component {
  
    state = {
        name:0,
        iconName: "bookmark-outline", iconColor: '#131313'
    }

    call = ()=>{
    // 使用 this.setState() 修改狀態
        if (this.state.name ==0) {
            this.setState(
                {
                    name: 1,
                    iconName: "bookmark", iconColor: '#6200EE'
                }
            );
        } else {
            this.setState(
                {
                    name: 0,
                    iconName: "bookmark-outline", iconColor: '#131313'
                }
            );
        }
    }

    render() {
        return (
            <>
                <Button
                    onPress={this.call}
                    backgroundColor="transparent"
                    size="10"
                    justifyContent='flex-end' alignItems='center'
                >
                    <MaterialCommunityIcons
                        name= {this.state.iconName}
                        size={25}
                        style={{
                            color: this.state.iconColor, 
                            margin:8,
                            marginRight: -9,
                        }} 
                    />
                </Button>
            </>
        )
    }
}