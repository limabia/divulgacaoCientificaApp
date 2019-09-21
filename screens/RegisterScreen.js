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
    KeyboardAvoidingView
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
    };

    redirectLogin() {
        this.props.navigation.navigate('LoginScreen')
    }
    redirectVoltar() {
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={[loginStyle.container]}>
                <ScrollView>
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
                    <TouchableOpacity
                        style={[Layout.mt49, loginStyle.styleButton, Layout.blurCard]}
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

