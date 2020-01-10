import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Block, Text } from './units'
import * as Font from 'expo-font'
import * as theme from './theme'

// Components
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Dashboard/Home'
import Settings from './components/Dashboard/Home'
import AuthLoading from './components/Auth/AuthLoading'


// const AppStack = createStackNavigator({ Home, Settings });
// const AuthStack = createStackNavigator({ Login: Login });

// export default createAppContainer(createSwitchNavigator(
//     {
//         AuthLoading: AuthLoading,
//         App: AppStack,
//         Auth: AuthStack,
//     },
//     {
//         initialRouteName: 'AuthLoading',
//     }
// ));
class App extends Component {
    state = {
        fontsLoaded: false
    }

    loadFonts() {
        return Font.loadAsync({
            'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
            'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
            'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
            'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
            'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
            'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        })
    }

    async componentDidMount() {
        console.log('Auth loading')
        await this.loadFonts()
        this.setState({ fontsLoaded: true })
    }

    render() {
        if (!this.state.fontsLoaded) {
            return (
                <Block middle style={styles.container}>
                    <ActivityIndicator size="large" color="#D61B1F" />
                </Block>
            )
        }
        return (
            <Block color='light' middle style={styles.container}>
                <AppContainer />
            </Block>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: theme.sizes.padding
    }
})

const AppSwitchNavigator = createSwitchNavigator({
    Auth: createSwitchNavigator({
        Login,
        Register,
    })
    // Register: { screen: Register },
    // Login: { screen: Login },
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default App

// export default createSwitchNavigator({
//     AuthLoading: AuthLoading
// })
