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
            'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
            'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
            'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
            'Montserrat-ExtraBold': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
            'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
            'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
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