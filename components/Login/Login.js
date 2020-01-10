import React, { Component } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native'
import { Block, Text } from '../../units'
import * as theme from '../../theme'

import { width, height } from '../../constants'

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={{ height }}>
                <Block middle flex={4}>
                    <Text>
                        <Text bold h1 color='secondary'>Login {"\n"}</Text>
                        <Text bold h1 color='secondary'>to your Account</Text>
                    </Text>
                </Block>
                <Block flex={2} style={styles.loginHeader, {}}>
                    <Text h3 semibold style={{ marginBottom: 5 }}>Email</Text>
                    <TextInput style={styles.emailInput} placeholder={'Enter your email'} />
                    <Text style={{ paddingVertical: 5 }}>
                        <Text>Don't have an account ? </Text>
                        <Text color='accent' bold>Register instead</Text>
                    </Text>
                    <Block style={styles.loginBtnWrapper}>
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text color='light' center h3 semibold>Login</Text>
                        </TouchableOpacity>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    emailInput: {
        height: 50,
        borderColor: theme.colors.secondary,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat-Regular'

    },
    loginBtn: {
        backgroundColor: theme.colors.secondary,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBtnWrapper: {
        marginTop: 40
    }
})
