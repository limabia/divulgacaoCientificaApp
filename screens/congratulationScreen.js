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
        this.props.navigation.navigate('MemeScreen')
    }
    redirectVoltar(){
        this.props.navigation.navigate('BiologiaScreen')
    }
    render() {
        return (
            <ScrollView style={[homeStyle.containerAzulEscuro]}>
                <TouchableOpacity onPress={()=> {this.redirectVoltar()}}>
                    <Image style={[{width: 25, height: 25}, Layout.mt49]} source={require('../assets/images/leftBranco.png')}/>
                </TouchableOpacity> 
                <View style={[Layout.justifyContentCenter, Layout.center, Layout.mt49]}>
                    <Text style={[Layout.medium40, Layout.mt49]}>PARABÉNS</Text>
                    <Image style={{marginTop: 50}} source={require('../assets/images/foguete.png')}/>
                </View>
                <TouchableOpacity
                        style={[Layout.mt49, Layout.styleButton, Layout.blurCard]}
                        onPress={() => {
                            this.redirectUploadMeme()
                        }}>
                        <Text style={[Layout.Medium16C2, Layout.center]}>Arrecadar pontos</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}