import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Block, Text } from './units'
import * as Font from 'expo-font'
import * as theme from './theme'

// Components
import AuthLoading from './components/Auth/AuthLoading'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Dashboard/Home'
import Profile from './components/Dashboard/Profile'
import AddTicket from './components/Dashboard/AddTicket'
import AllTickets from './components/Dashboard/AllTickets'
import MyTickets from './components/Dashboard/MyTickets'
import TicketDetails from './components/Dashboard/TicketDetails'

class App extends Component {
    state = {
        fontsLoaded: false
    }

    async loadFonts() {
        return Font.loadAsync({
            'MontserratRegular': require('./assets/fonts/MontserratRegular.ttf'),
            'MontserratBold': require('./assets/fonts/MontserratBold.ttf'),
            'MontserratSemiBold': require('./assets/fonts/MontserratSemiBold.ttf'),
            'MontserratExtraBold': require('./assets/fonts/MontserratExtraBold.ttf'),
            'MontserratMedium': require('./assets/fonts/MontserratMedium.ttf'),
            'MontserratLight': require('./assets/fonts/MontserratLight.ttf')
        })
    }

    async componentDidMount() {
        // console.log('Auth loading')
        await this.loadFonts()
        this.setState({ fontsLoaded: true })
    }

    render() {
        if (!this.state.fontsLoaded) {
            return (
                <Block center middle style={styles.container}>
                    <ActivityIndicator size='large' color={theme.colors.secondary} />
                </Block>
            )
        }
        return (
            <Block color='light' middle>
                <AppContainer />
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: theme.sizes.padding,
        // margin: theme.sizes.padding
    }
})

const AppSwitchNavigator = createSwitchNavigator({
    Auth: createSwitchNavigator({
        Login,
        Register
    }),
    Dashboard: createStackNavigator({
        Home,
        Profile,
        AllTickets,
        TicketDetails,
        AddTicket,
        MyTickets
    })
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default App
