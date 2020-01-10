import React, { Component } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Block, Text } from '../../units'
import * as theme from '../../theme'
import { width, height } from '../../constants'

class Login extends Component {
    renderRegister = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={{ height }} >
                <Block >
                    <Block flex={3} color='light'  >
                        <Text style={{ marginTop: 20 }}>
                            <Text bold h1 color='secondary'>Login {"\n"}</Text>
                            <Text bold h1 color='secondary'>to your Account</Text>
                        </Text>
                    </Block>
                    <Block flex={3} style={{ bottom: 10, position: 'absolute', right: 5, left: 5 }}>
                        <Text h3 semibold style={{ marginBottom: 5 }}>Email</Text>
                        <TextInput style={styles.authInput} placeholder={'Enter your email'} />
                        <Text style={{ paddingVertical: 5 }}>
                            <Text>Don't have an account ? </Text>
                            <Text accent bold onPress={this.renderRegister}>Register instead</Text>
                        </Text>
                        <Block style={styles.authBtnWrapper}>
                            <TouchableOpacity style={styles.authBtn}>
                                <Text color='light' center h3 semibold>Login</Text>
                            </TouchableOpacity>
                        </Block>
                    </Block>
                </Block>
            </KeyboardAvoidingView >
        )
    }
}

const styles = StyleSheet.create({
    authInput: {
        height: 50,
        borderColor: theme.colors.secondary,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat-Regular',

    },
    authBtn: {
        backgroundColor: theme.colors.secondary,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    authBtnWrapper: {
        marginTop: 40
    }
})

export default withNavigation(Login)