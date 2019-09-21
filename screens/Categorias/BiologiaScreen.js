import React from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import homeStyle from '../../assets/css/home';
import Layout from './../../constants/Layout';
export default class BiologiaScreen extends React.Component {
    redirectArtigo1(){
        this.props.navigation.navigate('ArtigoUmBiologiaScreen')
    }
    redirectArtigo2(){
        this.props.navigation.navigate('ArtigoDoisBiologiaScreen')
    }
    redirectArtigo3(){
        this.props.navigation.navigate('ArtigoTresBiologiaScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                <TouchableOpacity onPress={() => {this.redirectArtigo1()}} style={[homeStyle.box, Layout.mb15]}>
                    <Text style={Layout.medium20}>Biomas</Text>
                    <Text style={Layout.light15}>Como são classificados os biomas brasileiros.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.redirectArtigo2()}} style={[homeStyle.box,Layout.mb15]}>
                    <Text style={Layout.medium20}>Frutos do cerrado</Text>
                    <Text style={Layout.light15}>Os frutos do cerrado brasileiro na indústria de alimentos.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.redirectArtigo3()}} style={[homeStyle.box,Layout.mb15]}>
                    <Text style={Layout.medium20}>Restauração Florestal</Text>
                    <Text style={Layout.light15}>Técnicas para a restauração florestal.</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}