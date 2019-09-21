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

export default class LoginScreen extends React.Component {
    state = {
        usuario: '',
        senha: '',
    };

    redirectHome() {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={[loginStyle.container]}>
                <ScrollView>
                    <View style={Layout.alignItemsCenter}>
                        <Image style={[loginStyle.logo, Layout.mt120]}
                               source={require('../assets/images/robot-dev.png')}/>
                    </View>
                    <Text style={[Layout.Medium16C2, Layout.mt46]}>Login:</Text>
                    <TextInput style={[loginStyle.input, Layout.mt4]}
                               onChangeText={(usuario) => this.setState({usuario})}
                    />
                    <Text style={[Layout.Medium16C2, Layout.mt14]}>Senha:</Text>
                    <TextInput style={[loginStyle.input, Layout.mt4]}
                               onChangeText={(usuario) => this.setState({usuario})}
                    />
                    <Text style={[Layout.Regular14C2, Layout.mt14, Layout.underline]}>Esqueci minha
                        senha</Text>
                    <TouchableOpacity
                        style={[Layout.mt49, loginStyle.styleButton, Layout.blurCard]}
                        onPress={() => {
                            this.redirectHome()
                        }}>
                        <Text style={[Layout.Medium16C2, Layout.center]}>login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
LoginScreen.navigationOptions = {
    header: null,
};

