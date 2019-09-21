import React from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import homeStyle from '../../../assets/css/home';
import Layout from '../constants/Layout.js';
import Colors from "../constants/Colors";
export default class ArtigoUmCienciasHumanasScreen extends React.Component {
    redirectCongratulations(){
        this.props.navigation.navigate('CongratulationsScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                                <View style={[homeStyle.box, Layout.mb15]}>
                    <Text style={Layout.medium20}>Características e potencialidades dos frutos do Cerrado na indústria de alimentos</Text>
                    <Text style={Layout.lightTexto}>
                    O Cerrado é o segundo maior bioma brasileiro e apresenta grande diversidade de frutos que possuem alto valor
nutricional, sabor e aroma característicos, compostos bioativos com propriedades antioxidantes e apelo saudável.
O mercado consumidor visa a produtos com apelo natural e funcional, e, pelo fato de haver grandes perdas pós-
colheita dos frutos do cerrado, cabe à indústria de alimentos aliar tais propriedades dos frutos à elaboração de
novos produtos com valor agregado e maior tempo de vida de prateleira. O presente trabalho apresenta uma
revisão com o objetivo de listar e caracterizar os frutos do cerrado (pequi, bocaiuva, mangaba, cagaita, baru, murici,
mama-cadela, buriti, araticum e guabiroba), apresentando estudos com possíveis aplicações na indústria de
alimentos.
                    </Text>
                    <TouchableOpacity
                        style={[Layout.mt49, Layout.styleButton, Layout.blurCard]}
                        onPress={() => {
                            this.redirectCongratulations()
                        }}>
                        <Text style={[Layout.Medium16C2, Layout.center]}>Terminei de ler :)</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}