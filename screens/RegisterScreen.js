import Layout from '../constants/Layout.js';
import loginStyle from '../assets/css/login.js';
import React from 'react';
import {
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    View,
    TextInput,
    KeyboardAvoidingView, 
    Picker
} from 'react-native';
import * as Font from "expo-font";
import {AppLoading} from "expo";
import {Asset} from "expo-asset";

export default class RegisterScreen extends React.Component {
    state = {
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: '',
        tipoUsuario: ''
    };

    redirectLogin() {
        this.props.navigation.navigate('LoginScreen')
    }
    redirectVoltar() {
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={[loginStyle.containerRegister]}>
                <ScrollView  style={loginStyle.psddingContainer} >
                    <TouchableOpacity onPress={()=> {this.redirectVoltar()}}>
                        <Image style={[{width: 25, height: 25}, Layout.mt49]} source={require('../assets/images/leftBranco.png')}/>
                    </TouchableOpacity> 
                    <Text style={[Layout.Medium30C2, Layout.center, Layout.mt49]}>Registre-se aqui!</Text>
                    <Text style={[Layout.Normal16C2, Layout.mt46]}>Nome:</Text>
                    <TextInput style={[loginStyle.input, Layout.mt4]}
                               onChangeText={(nome) => this.setState({nome})}
                    />
                     <Text style={[Layout.Normal16C2, Layout.mt14]}>Email:</Text>
                    <TextInput style={[loginStyle.input, Layout.mt4]}
                               onChangeText={(email) => this.setState({email})}
                    />
                     <Text style={[Layout.Normal16C2, Layout.mt14]}>Senha:</Text>
                    <TextInput style={[loginStyle.input, Layout.mt4]}
                               onChangeText={(senha) => this.setState({senha})}
                    />
                    <Text style={[Layout.Normal16C2, Layout.mt14]}>Confirme sua senha:</Text>
                    <TextInput style={[loginStyle.input, Layout.mt4]}
                               onChangeText={(confirmaSenha) => this.setState({confirmaSenha})}
                    />
                    <Text style={[Layout.Normal16C2, Layout.mt15]}>Tipo de usuário:</Text>
                    <Picker
                    selectedValue={this.state.language}
                    style={{height: 40, width: '100%', borderRadius: 5, marginTop: 4,
                    backgroundColor: 'white'}}
                    onValueChange={(tipo, itemIndex) =>
                        this.setState({tipoUsuario: tipo})
                    }>
                    <Picker.Item label="Tipo de usuário" value="user" />
                    <Picker.Item label="Produtor de artigo" value="prod" />
                    <Picker.Item label="Leitor de artigo" value="cons" />
                    <Picker.Item label="Leitor e consumidor de artigo" value="consprod" />
                    </Picker>
                    <TouchableOpacity
                        style={[Layout.mt49, loginStyle.styleButton, Layout.blurCard, Layout.mb15]}
                        onPress={() => {
                            this.redirectLogin()
                        }}>
                        <Text style={[Layout.Normal16C2, Layout.center]}>Enviar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
RegisterScreen.navigationOptions = {
    header: null,
};

