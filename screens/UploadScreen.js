import React from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import homeStyle from '../assets/css/home.js';
import Layout from '../constants/Layout.js';
import Colors from "../constants/Colors";
export default class UploadScreen extends React.Component {
    redirectArtigo1(){
        this.props.navigation.navigate('uploadScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                <View style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text>Upload </Text>
                </View>
            </ScrollView>
        );
    }
}