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
        this.props.navigation.navigate('uploadScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                <TouchableOpacity style={[homeStyle.box,Layout.mb15]}>
                    <Text style={Layout.medium20}>BIOSOC</Text>
                    <Text style={Layout.light15}>Estudos voltados para as áreas de biologia e sociologia.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[homeStyle.box,Layout.mb15]}>
                    <Text style={Layout.medium20}>Características e potencialidades dos frutos do Cerrado na indústria de alimentos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[homeStyle.box,Layout.mb15]}>
                    <Text style={Layout.medium20}>Análise da adequação florestal de pequenas propriedades rurais no sudoeste do Paraná</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}