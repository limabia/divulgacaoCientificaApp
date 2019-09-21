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
import Colors from './../../../constants/Colors';
export default class ArtigoTresBiologiaScreen extends React.Component {
    redirectCongratulations(){
        this.props.navigation.navigate('CongratulationsScreen')
    }
    render() {
        return (
            <ScrollView style={homeStyle.container}>
                                <View style={[homeStyle.box, Layout.mb15]}>
                    <Text style={Layout.medium20}>Análise da adequação florestal de pequenas propriedades rurais no sudoeste do Paraná</Text>
                    <Text style={Layout.lightTexto}>
                    Estudos indicam a perda ambiental com a reformulação da legislação florestal dada atualmente pela Lei de Proteção
da Vegetação Nativa (LPVN), antigo Código Florestal. Ainda são necessárias pesquisas que indiquem o efeito
sobre os titulares das terras, em regiões jurisdicionadas por outras regulamentações ambientais, como para o bioma
Mata Atlântica, e ainda, os reflexos da integração das leis com questões de cumprimento da função social dos
imóveis. A região Sudoeste do Paraná possui estrutura fundiária caracterizada pela pequena propriedade rural, e
os objetivos deste trabalho foram: verificar se existe diferença no cumprimento da função social rural da pequena
propriedade, considerando a realidade inicial das propriedades, o Código Florestal de 1965, e a LPVN; estimar o
custo de oportunidade economizado pelo agricultor com a adequação ambiental rural pela lei de 2012; determinar as
diferenças entre áreas de preservação permanente (APP) e reservas legais (RL) nas duas legislações; estimar a área a
ser recuperada pelo Programa de Regularização Ambiental (PRA) nas pequenas propriedades. Foram confeccionados
sete mapas de uso e ocupação do solo em ambiente de Sistema de Informação Geográfica, na qual os montantes de
áreas foram analisados com estatísticas inferenciais. Os dados permitiram concluir que: a pequena propriedade rural
na região cumpre a função social rural em todos os padrões; o custo de oportunidade economizado foi de 6,2% do
salário mínimo por módulo fiscal; A APP a restaurar foi inferior em relação à lei antecedente; estima-se para a região
sudoeste, a necessidade de recuperação de 11.762,40 hectares de matas ciliares; não existe diferença significativa
entre a reserva legal preexistente entre as duas leis; existe diferença significativa entre a reserva legal a recuperar.
Palavra-chave: Lei de Proteção da Vegetação Nativa; Estatuto da Terra; Lei da Mata Atlântica
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