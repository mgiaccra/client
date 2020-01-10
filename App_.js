import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'
import { Block, Text } from './units'
import * as theme from './theme'


// Components
import Login from './components/Auth/Login'

export default class App extends Component {
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
            'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
        })
    }

    async componentDidMount() {
        await this.loadFonts()
        this.setState({ fontsLoaded: true })
    }

    render() {
        return (
            <Block color='light' style={styles.container} >
                {this.state.fontsLoaded ? <Login /> : <ActivityIndicator />}

            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: theme.sizes.padding
    },
});
