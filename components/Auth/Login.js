import React, { Component } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Block, Text } from '../../units'
import * as theme from '../../theme'
import { width, height } from '../../constants'

class Login extends Component {
	constructor() {
		super()

		this.state = {
			email: ''
		}
	}

	renderRegister = () => {
		this.props.navigation.navigate('Register')
	}

	loginUser = () => {
		console.log('Login User Pressed')
		console.log(this.state.email)

		this.props.navigation.navigate('Home')
	}

	onChangeEmailInput = (email) => {
		this.setState({ email })
	}

	render() {
		return (
			<SafeAreaView color='primary' style={styles.safe}>
				<KeyboardAvoidingView behavior='height' style={styles.container}>
					<Block>
						<Block flex={3} color='light'>
							<Text style={{ position: 'absolute', bottom: height / 2 + 20 }}>
								<Text bold h1 color='secondary'>
									Login {'\n'}
								</Text>
								<Text bold h1 color='secondary'>
									to your Account
								</Text>
							</Text>
						</Block>
						<Block flex={3} style={{ bottom: 30, position: 'absolute', right: 5, left: 5 }}>
							<Text h3 semibold style={{ marginBottom: 5 }}>
								Email
							</Text>
							<TextInput
								style={styles.authInput}
								placeholder={'Enter your email'}
								onChangeText={this.onChangeEmailInput}
							/>
							<Text style={{ paddingVertical: 5 }}>
								<Text>Don't have an account ? </Text>
								<Text accent bold onPress={this.renderRegister}>
									Register instead
								</Text>
							</Text>
							<Block style={styles.authBtnWrapper}>
								<TouchableOpacity style={styles.authBtn} onPress={this.loginUser}>
									<Text color='light' center h3 semibold>
										Login
									</Text>
								</TouchableOpacity>
							</Block>
						</Block>
					</Block>
				</KeyboardAvoidingView>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: width * 0.05 + 2,
		padding: theme.sizes.padding,
		height
	},
	safe: {
		flex: 1,
		backgroundColor: theme.colors.light,
		padding: theme.sizes.padding,
		// margin: 
		// justifyContent: 'center',
		margin: 15,
		// paddingBottom: 5
	},
	authInput: {
		height: 50,
		borderColor: theme.colors.secondary,
		borderWidth: 2,
		borderRadius: 5,
		paddingHorizontal: 10,
		fontFamily: 'MontserratRegular'
	},
	authBtn: {
		backgroundColor: theme.colors.secondary,
		height: 50,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
		// bottom: 20
	},
	authBtnWrapper: {
		marginTop: 40
	}
})

export default withNavigation(Login)
