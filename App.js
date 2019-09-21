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
            headerTitle: <Text style={Layout.textHeader}>Home</Text>,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} >
                    <Image style={[Layout.backImage, Layout.justifyContentCenter]} source={require('./assets/images/left-arrow.png')}/>
                </TouchableOpacity>,
            headerRight:
            <View style={Layout.containerFlex}>
                <Image style={[Layout.notificationsImage, Layout.justifyContentCenter, Layout.mr23]}
                       source={require('./assets/images/notifications.png')}/>
                <View style={[Layout.pillNotifications]}/>
                <Image style={[Layout.settingsImage, Layout.justifyContentCenter, Layout.mr23]}
                       source={require('./assets/images/settings.png')}/>
            </View>,
            headerStyle: {
                backgroundColor: Colors.branco,
                height: 56
            },
            headerTintColor: Colors.azul0,
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
    LoginScreen: {
        screen: LoginScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: 'LoginScreen',
            drawerLockMode: 'locked-closed'
        },
    },
    RegisterScreen: {
        screen: RegisterScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: 'RegisterScreen',
            drawerLockMode: 'locked-closed'
        },
    },
    HomeScreen: {
        screen: HomeScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: 'HomeScreen',
            drawerLockMode: 'locked-closed',
        },
    },
    LinksScreen: {
        screen: LinksScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: 'LinksScreen',
            drawerLockMode: 'locked-closed',

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
