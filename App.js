import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Font } from 'expo-font'
import { Block, Text } from './units'
import * as theme from './theme'

// Components
import Login from './components/Login/Login'

export default class App extends Component {
    state = {
        fontsLoaded: false
    }

    loadFonts() {
        return Font.loadAsync({
            // 'Josefin-Thin': require('./assets/fonts/JosefinSans-Thin.ttf'),
            // 'Josefin-Light': require('./assets/fonts/JosefinSans-Light.ttf'),
            // 'Josefin-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
            // 'Josefin-SemiBold': require('./assets/fonts/JosefinSans-SemiBold.ttf'),
            'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
            'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
            'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
            'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        })
    }

    async componentDidMount() {
        await this.loadFonts()

        this.setState({ fontsLoaded: true })
    }
    render() {
        return (
            <Block color='light' style={styles.container} >
                <Login />
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: theme.sizes.padding
    },
});
