import React, {Component} from 'react';
import {Text,View} from 'react-native';

export default class StarMapScreen extends Component{
    render(){
        return(
            <View
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                <Text>StarMap Screen!</Text>
            </View>
        )
    }
    
}