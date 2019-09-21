import React from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import homeStyle from '../assets/css/home';
import Layout from './../constants/Layout';
export default class MemeScreen extends React.Component {
    redirectUploadMeme(){
        this.props.navigation.navigate('memeScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                <TouchableOpacity style={[homeStyle.box, Layout.mb15]}>
                    <Text style={Layout.medium20}>meme</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}