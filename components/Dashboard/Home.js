import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { ThemeProvider, Badge } from 'react-native-elements'
import { LineChart, Path } from 'react-native-svg-charts'
import { Line } from 'react-native-svg'
import * as shape from 'd3-shape'
import * as theme from '../../theme'
import * as mocks from '../../mocks'
import { Block, Text } from '../../units'

const custom = {
	// Custom theme for react-native-elements Badge component
	colors: {
		primary: theme.colors.info,
		warning: theme.colors.warning,
		error: theme.colors.danger
	}
}

class Home extends Component {
	static navigationOptions = {
		headerShown: false
	}

	selectPriorityColor(status) {
		switch (status) {
			case 'low':
				return 'primary'
			case 'medium':
				return 'warning'
			case 'high':
				return 'error'
			default:
				return 'primary'
		}
	}

	openProfileScreen = () => {
		console.log('Open Settings Screen')
		this.props.navigation.navigate('Profile')
	}

	renderChart() {
		const { chart } = this.props
		const LineShadow = ({ line }) => (
			<Path d={line} fill='none' stroke={theme.colors.primary} strokeWidth={7} strokeOpacity={0.1} />
		)

		return (
			<LineChart
				yMin={0}
				yMax={10}
				curve={shape.curveMonotoneX}
				style={{ flex: 1 }}
				data={chart}
				svg={{
					stroke: theme.colors.primary,
					strokeWidth: 1.25
				}}
				contentInset={{ left: theme.sizes.base, right: theme.sizes.base }}
			>
				<LineShadow belowChart={true} />
				<Line
					key='zero-axis'
					x1='0%'
					x2='100%'
					y1='50%'
					y2='50%'
					belowChart={true}
					stroke={theme.colors.accent2}
					strokeDasharray={[ 2, 10 ]}
					strokeWidth={1}
				/>
			</LineChart>
		)
	}

	renderHeader() {
		const { user } = this.props
		return (
			<Block flex={0.5} column style={{ paddingHorizontal: 15 }}>
				<Block flex={false} row style={{ paddingVertical: 15, marginTop: 15 }}>
					<Block center>
						<Text h3 semibold light style={{ marginRight: -(25 + 5) }}>
							Ticket Requests
						</Text>
					</Block>
					<TouchableOpacity activeOpacity={0.8} onPress={this.openProfileScreen}>
						<Image style={styles.userAvatar} source={{ uri: user.avatar }} />
					</TouchableOpacity>
				</Block>
				<Block card shadow color='light' style={styles.headerChart}>
					<Block row space='between' style={{ paddingHorizontal: 30 }}>
						<Block flex={false} row center>
							<Text h1>291</Text>
							<Text caption bold alternative style={{ paddingHorizontal: 10 }}>
								-12%
							</Text>
						</Block>
						<Block flex={false} row center>
							<Text caption bold danger style={{ paddingHorizontal: 10 }}>
								+49%
							</Text>
							<Text h1>481</Text>
						</Block>
					</Block>
					<Block flex={0.5} row space='between' style={{ paddingHorizontal: 30 }}>
						<Text lightText>Resolved</Text>
						<Text lightText>Requests</Text>
					</Block>
					<Block flex={1}>{this.renderChart()}</Block>
				</Block>
			</Block>
		)
	}

	renderRequest(request) {
		return (
			<Block row card shadow color='#FFFFFD' style={styles.request}>
				<Block flex={0.2} styles={styles.requestAvatarWrapper}>
					<Image style={styles.requestAvatar} source={{ uri: request.user.avatar }} />
				</Block>
				<Block flex={0.8} column middle>
					<Block row space='between'>
						<Text h3 style={{ paddingTop: 0, paddingBottom: 8 }}>
							{request.title}
						</Text>
						<ThemeProvider theme={custom}>
							<Badge
								status={this.selectPriorityColor(request.priority)}
								badgeStyle={{ width: 10, height: 10, borderRadius: 10 / 2 }}
							/>
						</ThemeProvider>
					</Block>
					<Text caption lightText>
						{request.description}
					</Text>
				</Block>
			</Block>
		)
	}

	renderRequests() {
		const { requests } = this.props
		return (
			<Block flex={0.8} column color='light' style={styles.requests}>
				<Block flex={false} row space='between' style={styles.requestsHeader}>
					<Text lightText>Recent Updates</Text>
					<TouchableOpacity activeOpacity={0.8}>
						<Text semibold color='accent'>
							View All
						</Text>
					</TouchableOpacity>
				</Block>
				<ScrollView>
					{requests.map((request) => (
						<TouchableOpacity activeOpacity={0.8} key={request.id}>
							{this.renderRequest(request)}
						</TouchableOpacity>
					))}
				</ScrollView>
			</Block>
		)
	}

	render() {
		return (
			<SafeAreaView color='primary' style={styles.safe}>
				{this.renderHeader()}
				{this.renderRequests()}
			</SafeAreaView>
		)
	}
}

Home.defaultProps = {
	user: mocks.user,
	requests: mocks.requests,
	chart: mocks.chart
}

export default Home

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: theme.colors.primary
	},
	userAvatar: {
		width: 25,
		height: 25,
		borderRadius: 25 / 2,
		marginRight: 5
	},
	headerChart: {
		paddingTop: 30,
		paddingBottom: 30,
		zIndex: 1
	},
	requests: {
		marginTop: -55,
		paddingTop: 55 + 20,
		paddingHorizontal: 15,
		zIndex: 1
	},
	requestsHeader: {
		paddingHorizontal: 20,
		paddingBottom: 15
	},
	request: {
		padding: 20,
		marginBottom: 15
	},
	requestAvatar: {
		width: 30,
		height: 30,
		borderRadius: 30 / 2
		// marginRight: 5
	},
	requestAvatarWrapper: {
		marginRight: 0,
		overflow: 'hidden',
		height: 90
	}
})
