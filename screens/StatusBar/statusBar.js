import React from "react";
import {View, Platform} from 'react-native';
import Colors from "../../constants/Colors";

export default class StatusBar extends React.Component {
    render() {
        return (
            <View
                style={Platform === 'ios' ?
                    {height: 20, backgroundColor: Colors.azul0, width: '100%', marginTop: 0}
                    :
                    {height: 24, backgroundColor: Colors.azul0, width: '100%', marginTop: 0}
                }>
            </View>
        )
    }
}


