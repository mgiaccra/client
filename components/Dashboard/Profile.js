import React from 'react'
import {
	AsyncStorage,
	SafeAreaView,
	StyleSheet,
	Image,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { Block, Text } from '../../units/index'
import * as theme from '../../theme'
import * as mocks from '../../mocks'
import { width, height } from '../../constants'

class Profile extends React.Component {
	constructor() {
		super()

		this.state = {
			isEditable: false,
			name: 'Yasmine Adams',
			avatar: ''
		}
	}

	static navigationOptions = {
		headerShown: false
	}

	componentDidMount() {
		this.setState({ name: mocks.user.name })
		this.setState({ avatar: mocks.user.avatar })
	}

	_signOutAsync = async () => {
		await AsyncStorage.clear()
		this.props.navigation.navigate('Auth')
	}

	selectPicture = async () => {
		await Permissions.askAsync(Permissions.CAMERA_ROLL)
		const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync()
		console.log(uri)
		if (!cancelled) this.setState({ avatar: uri })
	}

	onSave = () => {
		// Do update logic and save
		console.log('Do update logic and save')
		this.setState({ avatar: uri })
		// this.setState({avatar:})
	}

	onCancel = () => {}

	renderEditActivity() {
		if (this.state.isEditable) {
			return (
				<TouchableOpacity activeOpacity={0.8} onPress={this.onCancelClick}>
					{/* <Icon name='close' type='feather-awesome' color={theme.colors.accent} /> */}
					<Text bold color={theme.colors.alternative}>
						Close
					</Text>
				</TouchableOpacity>
			)
		}

		return (
			<TouchableOpacity activeOpacity={0.8} onPress={this.onEditClick}>
				<Text bold color='accent'>
					Edit
				</Text>
			</TouchableOpacity>
		)
	}

	onEditClick = () => {
		this.setState({ isEditable: true })
	}

	onCancelClick = () => {
		// Set All State Back to Normal
		this.setState({ avatar: mocks.user.avatar })
		this.setState({ name: mocks.user.name })
		this.setState({ isEditable: false })
	}

	onSaveClick = () => {
		// Update All Fields
		console.log('Do all update logic and re-render component')

		this.setState({ isEditable: false })
	}

	onChangeNameInput = (name) => {
		this.setState({ name })
	}

	renderNavigationBar() {
		return (
			<Block flex={0.15} row style={styles.backBtn} space='between'>
				<TouchableOpacity activeOpacity={0.8} onPress={this.goBack}>
					<Icon name='long-arrow-left' type='font-awesome' color={theme.colors.secondary} />
				</TouchableOpacity>
				{this.state.isEditable ? null : (
					<TouchableOpacity activeOpacity={0.8} onPress={this._signOutAsync}>
						<Text bold color={theme.colors.danger}>
							Logout
						</Text>
					</TouchableOpacity>
				)}
			</Block>
		)
	}

	goBack = () => {
		this.props.navigation.goBack()
	}

	renderSaveBtn() {
		if (this.state.isEditable) {
			return (
				<TouchableOpacity style={styles.saveBtn} onPress={this.onSaveClick}>
					<Text color='light' center h3 semibold>
						Save
					</Text>
				</TouchableOpacity>
			)
		}

		return null
	}

	renderEditableAvatar() {
		if (this.state.isEditable) {
			return (
				<TouchableOpacity onPress={this.selectPicture}>
					<ImageBackground
						style={styles.editableAvatar}
						imageStyle={styles.userAvatar}
						source={{ uri: this.state.avatar }}
					>
						<Block middle>
							<Icon name='camera' type='font-awesome' color={theme.colors.light} />
						</Block>
					</ImageBackground>
				</TouchableOpacity>
			)
		}
		return <Image style={styles.userAvatar} source={{ uri: this.state.avatar }} />
	}

	renderProfile() {
		const { user } = this.props
		return (
			<Block flex={0.85} column color='light' style={styles.profile}>
				<Text h2 bold>
					Profile
				</Text>
				<Block row style={{ paddingVertical: 20 }} space='between' flex={false}>
					{this.renderEditableAvatar(user)}
					{this.renderEditActivity()}
				</Block>
				<Block flex={1}>
					<Text h3 semibold style={{ paddingTop: 10 }}>
						Name
					</Text>
					<TextInput
						style={[ styles.profileInput, this.state.isEditable ? styles.editable : styles.uneditable ]}
						placeholder={'Enter your email'}
						onChangeText={this.onChangeNameInput}
						defaultValue={this.state.name}
						editable={this.state.isEditable}
					/>
				</Block>
				<Block flex={0.25} column style={styles.saveBtnWrapper}>
					{this.renderSaveBtn()}
				</Block>
			</Block>
		)
	}

	render() {
		return (
			<SafeAreaView color='primary' style={styles.safe}>
				<KeyboardAvoidingView behavior='height' style={styles.container}>
					{this.renderNavigationBar()}
					{this.renderProfile()}
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
	backBtn: {
		marginVertical: 25
	},
	profile: {
		marginTop: -75
	},
	userAvatar: {
		width: 75,
		height: 75,
		borderRadius: 75 / 2
		// marginRight: 5
	},
	editableAvatar: {
		width: 75,
		height: 75,
		borderRadius: 75 / 2,
		opacity: 0.5,
		backgroundColor: 'black'
	},
	profileInput: {
		height: 30,
		fontFamily: 'Montserrat-Regular'
	},
	editable: {
		color: theme.colors.dark
	},
	uneditable: {
		// color: theme.colors.accent,
		color: '#00000030'
	},
	saveInput: {
		height: 50,
		borderColor: theme.colors.secondary,
		borderWidth: 2,
		borderRadius: 5,
		paddingHorizontal: 10,
		fontFamily: 'Montserrat-Regular'
	},
	saveBtn: {
		backgroundColor: theme.colors.success,
		height: 50,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	saveBtnWrapper: {
		// marginBottom: 90,
		// bottom: 35
		// justifyContent: 'flex-end'
		alignContent: 'flex-end'
	}
})

Profile.defaultProps = {
	user: mocks.user
}

export default withNavigation(Profile)
