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
export default class PerfilScreen extends React.Component {
    redirectUploadArquivos(){
        this.props.navigation.navigate('uploadScreen')
    }
    redirectBiologiaScreen(){
        this.props.navigation.navigate('BiologiaScreen')
    }
    redirectCienciasHumanasScreen(){
        this.props.navigation.navigate('CienciasHumanasScreen')
    }
    RedirectEngenhariasScreen(){
        this.props.navigation.navigate('EngenhariasScreen')
    }
    RedirectPsicanaliseScreen(){
        this.props.navigation.navigate('PsicanaliseScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                <View style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Image style={[homeStyle.logo]}
                           source={require('../assets/images/logoOPadrao.png')}/>
                </View>
                <TouchableOpacity onPress={()=>{this.redirectCienciasHumanasScreen()}} style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text style={homeStyle.textCategoria}>Ciências humanas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.redirectBiologiaScreen()}} style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text style={homeStyle.textCategoria}>Ciências Biológicas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.RedirectEngenhariasScreen()}} style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text style={homeStyle.textCategoria}>Engenharias</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.RedirectPsicanaliseScreen()}} style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Text style={homeStyle.textCategoria}>Psicanalise</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}