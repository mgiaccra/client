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

    async loadFonts() {
        return await Font.loadAsync({
            'MontserratRegular': require('./assets/fonts/MontserratRegular.ttf'),
            'MontserratBold': require('./assets/fonts/MontserratBold.ttf'),
            'MontserratSemiBold': require('./assets/fonts/MontserratSemiBold.ttf'),
            'MontserratExtraBold': require('./assets/fonts/MontserratExtraBold.ttf'),
            'MontserratMedium': require('./assets/fonts/MontserratMedium.ttf'),
            'MontserratLight': require('./assets/fonts/MontserratLight.ttf')
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
