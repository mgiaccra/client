import React, { Component } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Block, Text } from '../../units'
import * as theme from '../../theme'
import { width, height } from '../../constants'

class Register extends Component {
	renderLogin = () => {
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<SafeAreaView color='primary' style={styles.safe}>
				<KeyboardAvoidingView behavior='height' style={styles.container}>
					<Block>
						<Block flex={3}>
							<Text style={{ position: 'absolute', bottom: height / 2 + 20 }}>
								<Text bold h1 color='secondary'>
									Register {'\n'}
								</Text>
								<Text bold h1 color='secondary'>
									a new Account
								</Text>
							</Text>
						</Block>
						<Block flex={3} style={{ bottom: 30, position: 'absolute', right: 5, left: 5 }}>
							<Text h3 semibold style={{ marginBottom: 5 }}>
								Email
							</Text>
							<TextInput style={styles.authInput} placeholder={'Enter your email'} />
							<Text h3 semibold style={{ marginBottom: 5, marginTop: 10 }}>
								Password
							</Text>
							<TextInput style={styles.authInput} placeholder={'Enter password'} />
							<Text style={{ paddingVertical: 5 }}>
								<Text>Already have an account ? </Text>
								<Text accent bold onPress={this.renderLogin}>
									Login instead
								</Text>
							</Text>
							<Block style={styles.authBtnWrapper}>
								<TouchableOpacity style={styles.authBtn}>
									<Text color='light' center h3 semibold>
										Register
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
		// padding: theme.sizes.padding,
		height
	},
	safe: {
		flex: 1,
		backgroundColor: theme.colors.light,
		padding: theme.sizes.padding
	},
	authInput: {
		height: 50,
		borderColor: theme.colors.secondary,
		borderWidth: 2,
		borderRadius: 5,
		paddingHorizontal: 10,
		fontFamily: 'Montserrat-Regular'
	},
	authBtn: {
		backgroundColor: theme.colors.secondary,
		height: 50,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	authBtnWrapper: {
		marginTop: 40
	}
})

export default withNavigation(Register)
