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
                <Text style={[Layout.Medium20Azul, Layout.center, Layout.mt14, Layout.mb15]}>Sobre o que você quer ler hoje?</Text>
                <TouchableOpacity onPress={()=>{this.redirectCienciasHumanasScreen()}} style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <View style={Layout.row}>
                        <View style={{width: '15%'}}>
                            <Image style={homeStyle.imgIconHome} source={require('../assets/images/icon.png')}/>
                        </View>
                        <View style={{width: '85%'}}>
                            <Text style={homeStyle.textCategoria}>Ciências humanas</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.redirectBiologiaScreen()}} style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <View style={Layout.row}>
                        <View style={{width: '15%'}}>
                            <Image style={homeStyle.imgIconHome} source={require('../assets/images/icon.png')}/>
                        </View>
                        <View style={{width: '85%'}}>
                            <Text style={homeStyle.textCategoria}>Ciências Biológicas</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.RedirectEngenhariasScreen()}} style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <View style={Layout.row}>
                        <View style={{width: '15%'}}>
                            <Image style={homeStyle.imgIconHome} source={require('../assets/images/icon.png')}/>
                        </View>
                        <View style={{width: '85%'}}>
                            <Text style={homeStyle.textCategoria}>Engenharias</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.RedirectPsicanaliseScreen()}} style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <View style={Layout.row}>
                        <View style={{width: '15%'}}>
                            <Image style={homeStyle.imgIconHome} source={require('../assets/images/icon.png')}/>
                        </View>
                        <View style={{width: '85%'}}>
                            <Text style={homeStyle.textCategoria}>Psicanalise</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}