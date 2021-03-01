import React, { Component } from 'react'
import { StyleSheet, AsyncStorage, View, ActivityIndicator } from 'react-native'
import { withNavigation } from 'react-navigation'
import * as Font from 'expo-font'
import * as theme from '../../theme'
import { Block, Text } from '../../units/Block'

class AuthLoading extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    state = {
        fontsLoaded: false
    }

    loadFonts() {
        return Font.loadAsync({
            'MontserratRegular': require('../../assets/fonts/MontserratRegular.ttf'),
            'MontserratBold': require('../../assets/fonts/MontserratBold.ttf'),
            'MontserratSemiBold': require('../../assets/fonts/MontserratSemiBold.ttf'),
            'MontserratExtraBold': require('../../assets/fonts/MontserratExtraBold.ttf'),
            'MontserratMedium': require('../../assets/fonts/MontserratMedium.ttf'),
            'MontserratLight': require('../../assets/fonts/MontserratLight.ttf'),
        })
    }

    async componentDidMount() {
        console.log('Auth loading')
        await this.loadFonts()
        this.setState({ fontsLoaded: true })
    }


    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // const token = await AsyncStorage.getItem('token');
        const token = null

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(token ? 'App' : 'Auth');
        this.props.navigation.navigate('Regitser');
    };

    // Render any loading content that you like here
    render() {
        return (
            <Block center middle style={styles.container}>
                <ActivityIndicator />
                {/* <StatusBar barStyle="default" /> */}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: theme.sizes.padding
    }
})

export default withNavigation(AuthLoading)