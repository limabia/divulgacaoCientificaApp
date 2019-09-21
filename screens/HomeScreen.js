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
export default class HomeScreen extends React.Component {
    redirectUploadArquivos(){
        this.props.navigation.navigate('uploadScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                <View style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Image style={[homeStyle.logo]}
                           source={require('../assets/images/logoOPadrao.png')}/>
                </View>
                <TouchableOpacity
                        style={[Layout.mt14, Layout.mb15, homeStyle.styleButton, Layout.blurCard]}
                        onPress={() => {
                            this.redirectUploadArquivos()
                        }}>
                            <View style={[Layout.row, Layout.center]}>
                                <Text style={[Layout.Medium16C2, Layout.center]}>Submeter artigo  </Text> 
                                <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../assets/images/upload-button.png')}/>
                            </View>
                </TouchableOpacity>
                <View style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text>Ciências humanas</Text>
                </View>
                <View style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text>Biologia</Text>
                </View>
                <View style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text>Biologia</Text>
                </View>
                <View style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text>Biologia</Text>
                </View>
            </ScrollView>
        );
    }
}