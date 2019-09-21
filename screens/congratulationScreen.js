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
import Layout from '../constants/Layout';
import { labeledStatement } from '@babel/types';
export default class CongratulationsScreen extends React.Component {
    redirectUploadMeme(){
        this.props.navigation.navigate('ArtigoUmBiologiaScreen')
    }
    render() {
        return (
            <ScrollView style={[homeStyle.containerAzulEscuro]}>
                <View style={[Layout.justifyContentCenter, Layout.center, Layout.mt49]}>
                    <Text style={Layout.medium40}>PARABÉNS</Text>
                    <Image source={require('../assets/images/foguete.png')}/>
                </View>
            </ScrollView>
        );
    }
}