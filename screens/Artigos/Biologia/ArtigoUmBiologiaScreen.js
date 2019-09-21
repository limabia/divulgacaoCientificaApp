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
import Layout from './../../../constants/Layout';
export default class ArtigoUmBiologiaScreen extends React.Component {
    redirectCongratulations(){
        this.props.navigation.navigate('CongratulationsScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                <View style={[homeStyle.box, Layout.mb15]}>
                    <Text style={Layout.medium20}>BIOSOC</Text>
                    <Text style={Layout.lightTexto}>Neste trabalho, iremos explicar sobre o site que estamos desenvolvendo
                    sob orientações do professor Ronaldo (Biologia) e da professora Eledir
                    (Sociologia).
                    </Text>
                    <Text style={Layout.lightTexto}>
                    Estamos elaborando este site há exatamente um ano, nos três primeiros
                    bimestres de 2016, fizemos levantamentos sobre as principais matérias de
                    cada uma dessas disciplinas, no quarto bimestre já fizemos uma inclusão no
                    projeto, que é, cada conteúdo do site, será apresentado de três maneiras,
                    sendo eles, por trabalhos científicos, vídeos e imagens. Por que fizemos isso?
                    Porque cada pessoa tem uma maneira ou prática de estudo em que se sente
                    mais confiante para aprender com mais facilidade.
                    </Text>
                    <Text style={Layout.lightTexto}>
                    O site terá uma aba exclusivamente para a matéria de Biologia, que tem
                    como foco ensinar sobre divisão celular e também sobre o corpo humano.
                    Também terá uma aba exclusiva para Sociologia que irá abordar a princípio,
                    três sociólogos muito importantes, que a partir de seus fundamentos, a
                    sociedade se organiza na atualidade, sendo eles Durkheim, Max Weber e Karl
                    Marx.
                    </Text>
                    <Text style={Layout.lightTexto}>
                    Fizemos no começo desse ano também, alguns levantamentos de
                    preços para o inicio de nosso projeto.
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