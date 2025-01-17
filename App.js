import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from "./screens/LinksScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CongratulationsScreen from "./screens/congratulationScreen";
import UploadScreen from "./screens/UploadScreen";
import MemeScreen from "./screens/MemeScreen";
import BiologiaScreen from "./screens/Categorias/BiologiaScreen";
import ArtigoUmBiologiaScreen from "./screens/Artigos/Biologia/ArtigoUmBiologiaScreen";
import ArtigoDoisBiologiaScreen from "./screens/Artigos/Biologia/ArtigoDoisBiologiaScreen";
import ArtigoTresBiologiaScreen from "./screens/Artigos/Biologia/ArtigoTresBiologiaScreen";
import PerfilScreen from "./screens/PerfilScreen";
import CienciasHumanasScreen from "./screens/Categorias/CienciasHumanasScreen";
import EngenhariasScreen from "./screens/Categorias/EngenhariasScreen";
import PsicanaliseScreen from "./screens/Categorias/PsicanaliseScreen";
import {AppLoading} from "expo";
import Layout from './constants/Layout.js';
import {Asset} from "expo-asset";
import * as Font from 'expo-font';
import Colors from "./constants/Colors";

class App extends Component {
    state = {
        isLoadingComplete: false
    };
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    _loadResourcesAsync = async () => {
        await Font.loadAsync({
            // 'roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf')
        });
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/robot-dev.png'),
                require('./assets/images/robot-dev.png'),
            ]),
        ]);
    };

    _handleLoadingError = error => {
        console.warn('este erro: ' + error);
    };

    _handleFinishLoading = () => {
        this.setState({
            isLoadingComplete: true
        });
    };

    render() {
        return (
            <View>
                {
                    !this.state.isLoadingComplete ?
                        <View style={{flex: 0.9, backgroundColor: ''}}>
                            <AppLoading
                                startAsync={this._loadResourcesAsync}
                                onError={this._handleLoadingError}
                                onFinish={this._handleFinishLoading}
                            />
                        </View>
                        :
                        <View style={styles.container}>
                            <AppNavigator/>
                        </View>
                }
            </View>
        );
    }
}

const RegisterScreen_StackNavigator = createStackNavigator({
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: ({navigation}) => ({
            //sem header
            header: null
        }),
    },
});
const UploadScreen_StackNavigator = createStackNavigator({
    UploadScreen: {
        screen: UploadScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Submeter artigo aqui</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const BiologiaScreen_StackNavigator = createStackNavigator({
    BiologiaScreen: {
        screen: BiologiaScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Ciências Biológicas</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const ArtigoDoisBiologiaScreen_StackNavigator = createStackNavigator({
    ArtigoDoisBiologiaScreen: {
        screen: ArtigoDoisBiologiaScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Leitura em andamento</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('BiologiaScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const ArtigoUmBiologiaScreen_StackNavigator = createStackNavigator({
    ArtigoUmBiologiaScreen: {
        screen: ArtigoUmBiologiaScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Leitura em andamento</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('BiologiaScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const ArtigoTresBiologiaScreen_StackNavigator = createStackNavigator({
    ArtigoTresBiologiaScreen: {
        screen: ArtigoTresBiologiaScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Leitura em andamento</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('BiologiaScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const CienciasHumanasScreen_StackNavigator = createStackNavigator({
    CienciasHumanasScreen: {
        screen: CienciasHumanasScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Ciências Humanas</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const EngenhariasScreen_StackNavigator = createStackNavigator({
    EngenhariasScreen: {
        screen: EngenhariasScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Engenharias</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const PsicanaliseScreen_StackNavigator = createStackNavigator({
    PsicanaliseScreen: {
        screen: PsicanaliseScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Psicanalise</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const PerfilScreen_StackNavigator = createStackNavigator({
    PerfilScreen: {
        screen: PerfilScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>Meu Perfil</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const LoginScreen_StackNavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) => ({
            //sem header
            header: null
        }),
    },
});
const HomeScreen_StackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <Text style={Layout.textHeader}>CiLearn</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/list.png')}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
        }),
    },
});
const CongratulationsScreen_StackNavigator = createStackNavigator({
    CongratulationsScreen: {
        screen: CongratulationsScreen,
        navigationOptions: ({navigation}) => ({
            //sem header
            header: null
        }),
    },
});
const MemeScreen_StackNavigator = createStackNavigator({
    MemeScreen: {
        screen: MemeScreen,
        navigationOptions: ({navigation}) => ({
            //sem header
            header: null
        }),
    },
});
const LinksScreen_StackNavigator = createStackNavigator({
    LinksScreen: {
        screen: LinksScreen,
        navigationOptions: ({navigation}) => ({
            //sem header
            header: null
        }),
    },
});
const DrawerNavigator = createDrawerNavigator({
 
    PerfilScreen: {
        screen: PerfilScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => 'Meu Perfil',
        },
    },
    UploadScreen: {
        screen: UploadScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => 'Submeta um artigo',
            drawerLockMode: 'locked-closed'
        },
    },
    MemeScreen: {
        screen: MemeScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    BiologiaScreen: {
        screen: BiologiaScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    CongratulationsScreen: {
        screen: CongratulationsScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    ArtigoDoisBiologiaScreen: {
        screen: ArtigoDoisBiologiaScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    ArtigoTresBiologiaScreen: {
        screen: ArtigoTresBiologiaScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    ArtigoUmBiologiaScreen: {
        screen: ArtigoUmBiologiaScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    CienciasHumanasScreen: {
        screen: CienciasHumanasScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    EngenhariasScreen: {
        screen: EngenhariasScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    PsicanaliseScreen: {
        screen: PsicanaliseScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    RegisterScreen: {
        screen: RegisterScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    HomeScreen: {
        screen: HomeScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed',
        },
    },
    LinksScreen: {
        screen: LinksScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerLockMode: 'locked-closed',

        },
    },
    LoginScreen: {
        screen: LoginScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: () => 'Sair',
        },
    },
}, {
    initialRouteName: 'LoginScreen',
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: '#2695F3',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#C6C8CC',
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'roboto',
    },
});
export default createAppContainer(DrawerNavigator);
